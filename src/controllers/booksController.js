const booksService = require('../services/booksService');
const logger = require('../middleware/logger');  // 로그 시스템 추가

class BooksController {
  async getAllBooks(req, res) {
    try {
      const books = await booksService.getAllBooks();
      res.json(books);
    } catch (error) {
      logger.error(`모든 Books 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 가져올 수 없습니다.' });
    }
  }

  async getBookById(req, res) {
    try {
      const book = await booksService.getBookById(req.params.id);
      res.json(book);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Book 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(404).json({ error: '해당 데이터를 찾을 수 없습니다.' });
    }
  }

  async createBook(req, res) {
    try {
      const newBook = await booksService.createBook(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      logger.error(`Book 데이터를 생성하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 생성할 수 없습니다.' });
    }
  }

  async updateBook(req, res) {
    try {
      const updatedBook = await booksService.updateBook(req.params.id, req.body);
      res.json(updatedBook);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Book 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  async deleteBook(req, res) {
    try {
      await booksService.deleteBook(req.params.id);
      res.status(204).end();
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Book 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 삭제할 수 없습니다.' });
    }
  }
}

module.exports = new BooksController();