var express = require('express');
var router = express.Router();
var admin = require('../admin/admin')

const { models } = require('../db/ConnectMongodb')

// ensures user is authenticated before serving
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

// finds a user's book based on the id given to the request
const findBookMiddleware = async (req, res, next) => {
    const bookId = req.params.id
    models.Book.findById(bookId, (err, book) => {
        if (err) {
            res.status(400).send('cannot find book')
        } else {
            req.book = book
            next()
        }
    })
}

// verifies that the user is trying to use their own book and not someone elses
const verifyOwnerMiddleware = (req, res, next) => {
    if (req.uid !== req.book.owner) {
        res.status(401).send('you can only touch your book')
    } else {
        next()
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('api works')
});

// gets a book by id
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

// gets all of a user's books
router.get('/books', authMiddleware, (req, res) => {
    const { uid } = req

    models.Book.find({owner: uid})
    .then((doc) => {
        res.send(doc)
    })
    .catch(err => {
        res.status(400).send({err})
    })
})

// makes a new book and returns its id
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

// deletes a book
router.delete('/books/:id', [authMiddleware, findBookMiddleware, verifyOwnerMiddleware], async (req, res) => {
    const deleted = await req.book.remove()
    res.send(deleted)
})

// updates a book on every keystroke
router.put('/books/:id', authMiddleware, (req, res) => {
    const bookId = req.params.id
    models.Book.findById(bookId, (err, book) => {
        if (book.owner !== req.uid) {
            res.status(401).send('you can only update your book')
        } else {
            for (const [key, val] of Object.entries(req.body)) {
                book[key] = val
            }
            book.save((err) => {
                if (!err) {
                    res.send('good')
                } else {
                    res.status(400).send('bad')
                }
            })
        }
    })
})

module.exports = router;
