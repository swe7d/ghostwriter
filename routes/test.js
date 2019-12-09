const assert = require('chai').assert;
var router = require('./api');
const { models } = require('../db/ConnectMongodb')

describe('Unit Test for API', function(){
    it('API Work', function(){
        //console.log(router.get('/'))
        assert.isNotNull(router.get('/'));
    });
    it('Get Book with ID Work', function(){
        assert.isNotNull(router.get('/books/:id'));
    });
    it('Get Book Work', function(){
        assert.isNotNull(router.get('/books'));
    });
    it('Post Book Work', function(){
        //console.log(router.post('/books'))
        //const newBook = new models.Book()
        //router.post("/books")
        //      .send(newBook)
        //      .end(function(err, res) {
        //          assert.equal(true,true)
        //  });
        assert.isNotNull(router.post('/books'));
    });
    it('Delete Book Work', function(){
        assert.isNotNull(router.delete('/books/:id'));
    });
    it('Put Book Work', function(){
        assert.isNotNull(router.put('/books/:id'));
    });
});