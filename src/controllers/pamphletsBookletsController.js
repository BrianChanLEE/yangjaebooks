const pamphletsBookletsService = require('../services/pamphletsBookletsService');
const logger = require('../middleware/logger');  // 로그 시스템 추가

class PamphletsBookletsController {
  async getAllPamphletsBooklets(req, res) {
    try {
      const pamphletsBooklets = await pamphletsBookletsService.getAllPamphletsBooklets();
      res.json(pamphletsBooklets);
    } catch (error) {
      logger.error(`모든 Pamphlets & Booklets 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 가져올 수 없습니다.' });
    }
  }

  async getPamphletBookletById(req, res) {
    try {
      const pamphletBooklet = await pamphletsBookletsService.getPamphletBookletById(req.params.id);
      res.json(pamphletBooklet);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Pamphlets & Booklets 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(404).json({ error: '해당 데이터를 찾을 수 없습니다.' });
    }
  }

  async createPamphletBooklet(req, res) {
    try {
      const newPamphletBooklet = await pamphletsBookletsService.createPamphletBooklet(req.body);
      res.status(201).json(newPamphletBooklet);
    } catch (error) {
      logger.error(`Pamphlets & Booklets 데이터를 생성하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 생성할 수 없습니다.' });
    }
  }

  async updatePamphletBooklet(req, res) {
    try {
      const updatedPamphletBooklet = await pamphletsBookletsService.updatePamphletBooklet(req.params.id, req.body);
      res.json(updatedPamphletBooklet);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Pamphlets & Booklets 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  async deletePamphletBooklet(req, res) {
    try {
      await pamphletsBookletsService.deletePamphletBooklet(req.params.id);
      res.status(204).end();
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Pamphlets & Booklets 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 삭제할 수 없습니다.' });
    }
  }
}

module.exports = new PamphletsBookletsController();