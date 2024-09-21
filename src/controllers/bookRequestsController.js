const bookRequestsService = require('../services/bookRequestsService');
const logger = require('../middleware/logger');  // 로그 시스템 추가

class BookRequestsController {
  async getAllBookRequests(req, res) {
    try {
      const bookRequests = await bookRequestsService.getAllBookRequests();
      res.json(bookRequests);
    } catch (error) {
      logger.error(`모든 Book Requests 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 가져올 수 없습니다.' });
    }
  }

  async getBookRequestById(req, res) {
    try {
      const bookRequest = await bookRequestsService.getBookRequestById(req.params.id);
      res.json(bookRequest);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Book Request 데이터를 가져오는 중 오류 발생: ${error.message}`);
      res.status(404).json({ error: '해당 데이터를 찾을 수 없습니다.' });
    }
  }

  async createBookRequest(req, res) {
    try {
      const newBookRequest = await bookRequestsService.createBookRequest(req.body);
      res.status(201).json(newBookRequest);
    } catch (error) {
      logger.error(`Book Request 데이터를 생성하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 생성할 수 없습니다.' });
    }
  }

  async updateBookRequest(req, res) {
    try {
      const updatedBookRequest = await bookRequestsService.updateBookRequest(req.params.id, req.body);
      res.json(updatedBookRequest);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  async deleteBookRequest(req, res) {
    try {
      await bookRequestsService.deleteBookRequest(req.params.id);
      res.status(204).end();
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Book Request 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 삭제할 수 없습니다.' });
    }
  }

  async updateJan_receivedRequest(req, res) {
    try {
      const updatedRequest = await bookRequestsService.updateJan_received(req.params.id, req.body);
      res.json(updatedRequest);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

   // 1 Jan
   async updateJan_receivedRequest(req, res) {
    try {
      const updatedRequest = await bookRequestsService.updateJan_received(req.params.id, req.body);
      res.json(updatedRequest);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Jan Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  // 2 Feb
  async updateFeb_receivedRequest(req, res) {
    try {
      const updatedRequest = await bookRequestsService.updateFeb_received(req.params.id, req.body);
      res.json(updatedRequest);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Feb Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  // 3 Mar
  async updateMar_receivedRequest(req, res) {
    try {
      const updatedRequest = await bookRequestsService.updateMar_received(req.params.id, req.body);
      res.json(updatedRequest);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Mar Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

  // 4 Apr
  async updateApr_receivedRequest(req, res) {
    try {
      const updatedRequest = await bookRequestsService.updateApr_received(req.params.id, req.body);
      res.json(updatedRequest);
    } catch (error) {
      logger.error(`ID ${req.params.id}의 Apr Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
    }
  }

// 5 May
async updateMay_receivedRequest(req, res) {
  try {
    const updatedRequest = await bookRequestsService.updateMay_received(req.params.id, req.body);
    res.json(updatedRequest);
  } catch (error) {
    logger.error(`ID ${req.params.id}의 May Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
    res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
  }
}

// 6 Jun
async updatJun_receivedRequest(req, res) {
  try {
    const updatedRequest = await bookRequestsService.updateJun_received(req.params.id, req.body);
    res.json(updatedRequest);
  } catch (error) {
    logger.error(`ID ${req.params.id}의 May Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
    res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
  }
}

// 7 Jul
async updatJul_receivedRequest(req, res) {
  try {
    const updatedRequest = await bookRequestsService.updatJul_received(req.params.id, req.body);
    res.json(updatedRequest);
  } catch (error) {
    logger.error(`ID ${req.params.id}의 Jul Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
    res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
  }
}

// 8 Aug
async updatAug_receivedRequest(req, res) {
  try {
    const updatedRequest = await bookRequestsService.updatAug_received(req.params.id, req.body);
    res.json(updatedRequest);
  } catch (error) {
    logger.error(`ID ${req.params.id}의 Aug Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
    res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
  }
}

// 9 Sep
async updateSep_receivedRequest(req, res) {
  try {
    const updatedRequest = await bookRequestsService.updateSep_received(req.params.id, req.body);
    res.json(updatedRequest);
  } catch (error) {
    logger.error(`ID ${req.params.id}의 Sep Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
    res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
  }
}

// 10 Oct
async updateOct_receivedRequest(req, res) {
  try {
    const updatedRequest = await bookRequestsService.updateOct_received(req.params.id, req.body);
    res.json(updatedRequest);
  } catch (error) {
    logger.error(`ID ${req.params.id}의 Oct Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
    res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
  }
}

// 11 Nov
async updateNov_receivedRequest(req, res) {
  try {
    const updatedRequest = await bookRequestsService.updateNov_received(req.params.id, req.body);
    res.json(updatedRequest);
  } catch (error) {
    logger.error(`ID ${req.params.id}의 Nov Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
    res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
  }
}

// 12 Dec
async updateDec_receivedRequest(req, res) {
  try {
    const updatedRequest = await bookRequestsService.updateDec_received(req.params.id, req.body);
    res.json(updatedRequest);
  } catch (error) {
    logger.error(`ID ${req.params.id}의 Dec Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
    res.status(500).json({ error: '데이터를 업데이트할 수 없습니다.' });
  }
}


}

module.exports = new BookRequestsController();






