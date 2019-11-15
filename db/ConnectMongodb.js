const mongoose = require('mongoose')

const Book = require('./schema/BookSchema')

const connect = () => {
    const deployment = process.env.deployment ? process.env.deployment : 'LOCAL'
    if (deployment == 'PROD') {
        console.log('connecting to production database...')
        return mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    } else if (deployment == 'DEV') {
        console.log('connecting to development database')
        return mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    } else {
        console.log('connecting to local database...')
        const localUrl = 'mongodb://localhost:27017/ghostwriter'
        return mongoose.connect(localUrl, {useNewUrlParser: true});
    }
}

const models = { Book }

module.exports = {
    models,
    connect
}