var express = require('express');
var router = express.Router();

const { models } = require('../db/ConnectMongodb')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('api works')
});

router.post('/books', (req, res) => {
    const doc = {
        finished: false,
        data: req.body,
    }

    const newBook = new models.Book(doc)
    newBook.save((err, doc) => {
        if (err) {
            res.sendStatus(500).send(err)
        } else {
            res.send(doc)
        }
    })
})

module.exports = router;
