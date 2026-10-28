import * as bookService from '../Services/bookService.js';

export const fetchhALLBooks = async (req, res) => {
    try {
        const books = await bookService.fetchALLBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createBook = async (req, res) => {
    const { name, author } = req.body;
    const book = { name, author };

    try {
        const bookId = await bookService.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};