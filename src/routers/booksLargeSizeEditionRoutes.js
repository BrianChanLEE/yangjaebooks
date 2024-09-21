const express = require('express');
const booksLargeSizeEditionController = require('../controllers/booksLargeSizeEditionController');
const router = express.Router();

router.get('/books-large-size-editions', booksLargeSizeEditionController.getAllBooksLargeSizeEditions);
router.get('/books-large-size-editions/:id', booksLargeSizeEditionController.getBookLargeSizeEditionById);
router.post('/books-large-size-editions', booksLargeSizeEditionController.createBookLargeSizeEdition);
router.put('/books-large-size-editions/:id', booksLargeSizeEditionController.updateBookLargeSizeEdition);
router.delete('/books-large-size-editions/:id', booksLargeSizeEditionController.deleteBookLargeSizeEdition);

module.exports = router;