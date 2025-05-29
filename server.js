const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// In-memory storage for books
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' }
];

// GET /books - Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET /books/:id - Get a specific book by ID
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
    if (!req.body.title || !req.body.author) {
        return res.status(400).send('Title and author are required');
    }
    const maxId = books.reduce((max, book) => (book.id > max ? book.id : max), 0);
    
    const book = {
        id: maxId + 1,
        title: req.body.title,
        author: req.body.author
    };
    
    books.push(book);
    res.status(201).json(book);
});

// PUT /books/:id - Update a book
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    
    if (!req.body.title || !req.body.author) {
        return res.status(400).send('Title and author are required');
    }
    
    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
});

// DELETE /books/:id - Delete a book
app.delete('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send('Book not found');
    
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.status(204).send();
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});