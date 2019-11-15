const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    finished: {
        type: Boolean,
    },
    data: {
        type: Object,
    }
})

const Book = mongoose.model('Books', bookSchema)

module.exports = Book