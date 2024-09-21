const formService = require('../services/formService');
const Logger = require('../middleware/logger');  // Winston logger 추가



class FormController {
  async getAllForms(req, res) {
    try {
      const forms = await formService.getAllForms();
      res.json(forms);
    } catch (error) {
      logger.error(`모든 Form 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 가져올 수 없습니다.' });
    }
  }

  async getFormById(req, res) {
    try {
      const form = await formService.getFormById(req.params.id);
      res.json(form);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Form 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(404).json({ error: '해당 데이터를 찾을 수 없습니다.' });
    }
  }

  async createForm(req, res) {
    try {
      const newForm = await formService.createForm(req.body);
      res.status(201).json(newForm);
    } catch (error) {
      logger.error(`Form 데이터를 생성하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 생성할 수 없습니다.' });
    }
  }

  async updateForm(req, res) {
    try {
      const updatedForm = await formService.updateForm(req.params.id, req.body);
      res.json(updatedForm);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Form 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  async deleteForm(req, res) {
    try {
      await formService.deleteForm(req.params.id);
      res.status(204).end();
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Form 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 삭제할 수 없습니다.' });
    }
  }
}

module.exports = new FormController();