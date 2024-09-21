const videoDvdService = require('../services/videoDvdService');
const logger = require('../middleware/logger');  // 로그 시스템 추가

class VideoDvdController {
  async getAllVideoDvds(req, res) {
    try {
      const videoDvds = await videoDvdService.getAllVideoDvds();
      res.json(videoDvds);
    } catch (error) {
      logger.error(`모든 Video DVD 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 가져올 수 없습니다.' });
    }
  }

  async getVideoDvdById(req, res) {
    try {
      const videoDvd = await videoDvdService.getVideoDvdById(req.params.id);
      res.json(videoDvd);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Video DVD 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(404).json({ error: '해당 데이터를 찾을 수 없습니다.' });
    }
  }

  async createVideoDvd(req, res) {
    try {
      const newVideoDvd = await videoDvdService.createVideoDvd(req.body);
      res.status(201).json(newVideoDvd);
    } catch (error) {
      logger.error(`Video DVD 데이터를 생성하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 생성할 수 없습니다.' });
    }
  }

  async updateVideoDvd(req, res) {
    try {
      const updatedVideoDvd = await videoDvdService.updateVideoDvd(req.params.id, req.body);
      res.json(updatedVideoDvd);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Video DVD 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  async deleteVideoDvd(req, res) {
    try {
      await videoDvdService.deleteVideoDvd(req.params.id);
      res.status(204).end();
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Video DVD 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 삭제할 수 없습니다.' });
    }
  }
}

module.exports = new VideoDvdController();