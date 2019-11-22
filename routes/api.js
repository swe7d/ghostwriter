var express = require('express');
var router = express.Router();
var admin = require('../admin/admin')

const { models } = require('../db/ConnectMongodb')

const authMiddleware = async (req, res, next) => {
    console.log(req.headers)
    const token = req.headers.authorization
    try {
        const { uid } = await admin.auth().verifyIdToken(token)
        req.uid = uid
        next()
    } catch(e) {
        res.status(401).send('you must be logged in to access this')
    }

}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('api works')
});

router.get('/books/:id', authMiddleware, (req, res) => {
    const bookId = req.params.id
    
    models.Book.findById(bookId)
    .then(doc => {
        if (req.uid !== doc.owner) {
            res.status(401).send('not your book')
        } else {
            res.send(doc)
        }
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

router.get('/books', authMiddleware, (req, res) => {
    const { uid } = req

    models.Book.find({owner: uid})
    .then((doc) => {
        res.send({data: doc})
    })
    .catch(err => {
        res.status(400).send({err})
    })
})

router.post('/books', authMiddleware, (req, res) => {
    const name = req.body.name
    const newBook = new models.Book({
        owner: req.uid,
        name,
        data: {},
    })

    newBook.save((err,doc) => {
        if (err) {
            res.status(400).send({err})
        } else {
            res.send({bookId: doc.id})
        }
    })
})

router.put('/books/:id', authMiddleware, (req, res) => {
    const bookId = req.params.id
    models.Book.findById(bookId, (err, book) => {
        if (book.owner !== req.uid) {
            res.status(401).send('you can only update your book')
        } else {
            book.data = req.body
            book.save((err) => {
                if (!err) {
                    res.send('good')
                } else {
                    res.status(400).send('bad')
                }
            })
        }
    })
    // if (req.body.owner !== req.uid) {
    //     res.status(401).send('you can only update your book')
    // } else {
    //     models.Book.updateOne(req.body)
    //     .then(() => {
    //         res.send('updated')
    //     })
    //     .catch(err => {
    //         res.status(400).send({err})
    //     })
    // }
})

module.exports = router;
