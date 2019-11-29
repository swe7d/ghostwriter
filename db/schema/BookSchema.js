const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    name: {
        type:String,
        required: true,
    },
    data: {
        type: Object,
    }
})

const Book = mongoose.model('Books', bookSchema)

module.exports = Book