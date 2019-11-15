var express = require('express');
var router = express.Router();

const { models } = require('../db/ConnectMongodb')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('api works')
});

router.post('/books', (req, res) => {
    var test = new models.Book({
        finished: false,
        data: {
            ayy: 'lmao',
        }
    })
    test.save((err, doc) => {
        if (err) {
            res.sendStatus(500).send(err)
        } else {
            console.log('good!!!')
            res.send(doc)
        }
    })
})

module.exports = router;
