const booksLargeSizeEditionService = require('../services/booksLargeSizeEditionService');
const logger = require('../middleware/logger');  // 로그 시스템 추가

class BooksLargeSizeEditionController {
  async getAllBooksLargeSizeEditions(req, res) {
    try {
      const booksLargeSizeEditions = await booksLargeSizeEditionService.getAllBooksLargeSizeEditions();
      res.json(booksLargeSizeEditions);
    } catch (error) {
      console.error(`모든 Books Large Size Edition 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 가져올 수 없습니다.' });
    }
  }

  async getBookLargeSizeEditionById(req, res) {
    try {
      const bookLargeSizeEdition = await booksLargeSizeEditionService.getBookLargeSizeEditionById(req.params.id);
      res.json(bookLargeSizeEdition);
    } catch (error) {
      console.error(`ID ${req.params.id}의 Books Large Size Edition 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(404).json({ error: '해당 데이터를 찾을 수 없습니다.' });
    }
  }

  async createBookLargeSizeEdition(req, res) {
    try {
      const newBookLargeSizeEdition = await booksLargeSizeEditionService.createBookLargeSizeEdition(req.body);
      res.status(201).json(newBookLargeSizeEdition);
    } catch (error) {
      console.error(`Books Large Size Edition 데이터를 생성하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 생성할 수 없습니다.' });
    }
  }

  async updateBookLargeSizeEdition(req, res) {
    try {
      const updatedBookLargeSizeEdition = await booksLargeSizeEditionService.updateBookLargeSizeEdition(req.params.id, req.body);
      res.json(updatedBookLargeSizeEdition);
    } catch (error) {
      console.error(`ID ${req.params.id}의 Books Large Size Edition 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  async deleteBookLargeSizeEdition(req, res) {
    try {
      await booksLargeSizeEditionService.deleteBookLargeSizeEdition(req.params.id);
      res.status(204).end();
    } catch (error) {
      console.error(`ID ${req.params.id}의 Books Large Size Edition 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 삭제할 수 없습니다.' });
    }
  }
}

module.exports = new BooksLargeSizeEditionController();