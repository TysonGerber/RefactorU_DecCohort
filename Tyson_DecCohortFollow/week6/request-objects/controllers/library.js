var LibraryModel = require('../models/bookLibrary')

module.exports = {
    books:  (req, res)=> {
        console.log('/books route')
        // if the bookid query parameter is not undefined, 
        // find that one book
        if (req.query.bookid == null) {
            // if there is no bookid query parameter, return all books
            console.log('/books route')
            console.log('/books route for all books')
            res.json(LibraryModel.findAll());
        } else {
            console.log('/books route for one id=', req.query.bookid)
            res.json(LibraryModel.findOne(req.query.bookid));
        }
    },
    genre: (req, res) =>{
        console.log('/books/:genre route') 
        res.json(LibraryModel.findGenre(req.params.genre))
        
    },
     addBook: (req, res) =>{
        console.log('/books/newbooks route') 
        LibraryModel.addBook(req.body)
        res.send('Book uploaded')
     }


}
