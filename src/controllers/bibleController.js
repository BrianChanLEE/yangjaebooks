const bibleService = require('../services/bibleService');
const logger = require('../middleware/logger');  

class BibleController {
  async getAllBibles(req, res) {
    try {
      const bibles = await bibleService.getAllBibles();
      res.json(bibles);
    } catch (error) {
      logger.error(`성경 목록을 가져오는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 가져올 수 없습니다.' });
    }
  }

  async getBibleById(req, res) {
    try {
      const bible = await bibleService.getBibleById(req.params.id);
      res.json(bible);
    } catch (error) {
      logger.error(`ID ${req.params.id}에 대한 성경 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(404).json({ error: '해당 데이터를 찾을 수 없습니다.' });
    }
  }

  async createBible(req, res) {
    try {
      const newBible = await bibleService.createBible(req.body);
      res.status(201).json(newBible);
    } catch (error) {
      logger.error(`성경 데이터를 생성하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 생성할 수 없습니다.' });
    }
  }

  async updateBible(req, res) {
    try {
      const updatedBible = await bibleService.updateBible(req.params.id, req.body);
      res.json(updatedBible);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 성경 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  async deleteBible(req, res) {
    try {
      await bibleService.deleteBible(req.params.id);
      res.status(204).end();
    } catch (error) {
      logger.error(`ID ${req.params.id}의 성경 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 삭제할 수 없습니다.' });
    }
  }
}

module.exports = new BibleController();