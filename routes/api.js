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
            res.send({data: {
                bookId: doc.id
            }})
        }
    })
})

router.put('/books', authMiddleware, (req, res) => {
    if (req.body.owner !== req.uid) {
        res.status(401).send('you can only update your book')
    } else {
        models.Book.updateOne(req.body)
        .then(() => {
            res.send('updated')
        })
        .catch(err => {
            res.status(400).send({err})
        })
    }
})

module.exports = router;
