const tractsService = require('../services/tractsService');
const logger = require('../middleware/logger');  // 로그 시스템 추가

class TractsController {
  async getAllTracts(req, res) {
    try {
      const tracts = await tractsService.getAllTracts();
      res.json(tracts);
    } catch (error) {
      logger.error(`모든 TRACTS 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 가져올 수 없습니다.' });
    }
  }

  async getTractById(req, res) {
    try {
      const tract = await tractsService.getTractById(req.params.id);
      res.json(tract);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 TRACTS 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(404).json({ error: '해당 데이터를 찾을 수 없습니다.' });
    }
  }

  async createTract(req, res) {
    try {
      const newTract = await tractsService.createTract(req.body);
      res.status(201).json(newTract);
    } catch (error) {
      logger.error(`TRACTS 데이터를 생성하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 생성할 수 없습니다.' });
    }
  }

  async updateTract(req, res) {
    try {
      const updatedTract = await tractsService.updateTract(req.params.id, req.body);
      res.json(updatedTract);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 TRACTS 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  async deleteTract(req, res) {
    try {
      await tractsService.deleteTract(req.params.id);
      res.status(204).end();
    } catch (error) {
      logger.error(`ID ${req.params.id}의 TRACTS 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 삭제할 수 없습니다.' });
    }
  }
}

module.exports = new TractsController();