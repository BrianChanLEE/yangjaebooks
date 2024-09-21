const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const logger = require('../middleware/logger');  // 로그 시스템 추가

class BookRequestsService {
  async getAllBookRequests() {
    try {
      const bookRequests = await prisma.book_requests.findMany();
      console.log("book:",bookRequests)
      return bookRequests;
    } catch (error) {
        console.error(`Book Requests 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 가져올 수 없습니다.');
    }
  }

  async getBookRequestById(id) {
    try {
      const bookRequest = await prisma.book_requests.findUnique({
        where: { id: parseInt(id) },
      });
      if (!bookRequest) {
        throw new Error('해당 ID의 Book Request 데이터가 없습니다.');
      }
      return bookRequest;
    } catch (error) {
        console.error(`ID ${id}의 Book Request 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 가져올 수 없습니다.');
    }
  }

  async createBookRequest(data) {
    try {
      const newBookRequest = await prisma.book_requests.create({
        data,
      });
      return newBookRequest;
    } catch (error) {
        console.error(`Book Request 데이터를 생성하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 생성할 수 없습니다.');
    }
  }

  async updateBookRequest(id, data) {
    try {
      const updatedBookRequest = await prisma.book_requests.update({
        where: { id: parseInt(id) },
        data,
      });
      return updatedBookRequest;
    } catch (error) {
        console.error(`ID ${id}의 Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

  async deleteBookRequest(id) {
    try {
      await prisma.book_requests.delete({
        where: { id: parseInt(id) },
      });
    } catch (error) {
        console.error(`ID ${id}의 Book Request 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 삭제할 수 없습니다.');
    }
  }

  // 1. updateJan_received
  async updateJan_received(id, data) {
    try {
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        throw new Error('유효하지 않은 ID입니다.');
      }

      let updateData = { ...data };

      if ('jan_received' in data && typeof data.jan_received === 'boolean') {
        if (data.jan_received === true) {
          updateData.jan_received_date = new Date();  // 현재 시간으로 설정
        } else {
          updateData.jan_received_date = null;  // null로 초기화
        }
      } else {
        throw new Error('jan_received는 boolean이어야 합니다.');
      }

      const updatedRequest = await prisma.book_requests.update({
        where: { id: parsedId },
        data: updateData,
      });

      logger.info(`ID ${id}의 Jan Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
      return updatedRequest;
    } catch (error) {
      logger.error(`ID ${id}의 Jan Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

  // 2. updateFeb_received
  async updateFeb_received(id, data) {
    try {
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        throw new Error('유효하지 않은 ID입니다.');
      }

      let updateData = { ...data };

      if ('feb_received' in data && typeof data.feb_received === 'boolean') {
        if (data.feb_received === true) {
          updateData.feb_received_date = new Date();  // 현재 시간으로 설정
        } else {
          updateData.feb_received_date = null;  // null로 초기화
        }
      } else {
        throw new Error('feb_received는 boolean이어야 합니다.');
      }

      const updatedRequest = await prisma.book_requests.update({
        where: { id: parsedId },
        data: updateData,
      });

      logger.info(`ID ${id}의 Feb Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
      return updatedRequest;
    } catch (error) {
      logger.error(`ID ${id}의 Feb Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

  // 3. updateMar_received
  async updateMar_received(id, data) {
    try {
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        throw new Error('유효하지 않은 ID입니다.');
      }

      let updateData = { ...data };

      if ('mar_received' in data && typeof data.mar_received === 'boolean') {
        if (data.mar_received === true) {
          updateData.mar_received_date = new Date();  // 현재 시간으로 설정
        } else {
          updateData.mar_received_date = null;  // null로 초기화
        }
      } else {
        throw new Error('mar_received는 boolean이어야 합니다.');
      }

      const updatedRequest = await prisma.book_requests.update({
        where: { id: parsedId },
        data: updateData,
      });

      logger.info(`ID ${id}의 Mar Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
      return updatedRequest;
    } catch (error) {
      logger.error(`ID ${id}의 Mar Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

  // 4. updateApr_received
  async updateApr_received(id, data) {
    try {
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        throw new Error('유효하지 않은 ID입니다.');
      }

      let updateData = { ...data };

      if ('apr_received' in data && typeof data.apr_received === 'boolean') {
        if (data.apr_received === true) {
          updateData.apr_received_date = new Date();  // 현재 시간으로 설정
        } else {
          updateData.apr_received_date = null;  // null로 초기화
        }
      } else {
        throw new Error('apr_received는 boolean이어야 합니다.');
      }

      const updatedRequest = await prisma.book_requests.update({
        where: { id: parsedId },
        data: updateData,
      });

      logger.info(`ID ${id}의 Apr Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
      return updatedRequest;
    } catch (error) {
      logger.error(`ID ${id}의 Apr Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

  // 5. updateMay_received
  async updateMay_received(id, data) {
    try {
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        throw new Error('유효하지 않은 ID입니다.');
      }

      let updateData = { ...data };

      if ('may_received' in data && typeof data.may_received === 'boolean') {
        if (data.may_received === true) {
          updateData.may_received_date = new Date();  // 현재 시간으로 설정
        } else {
          updateData.may_received_date = null;  // null로 초기화
        }
      } else {
        throw new Error('may_received는 boolean이어야 합니다.');
      }

      const updatedRequest = await prisma.book_requests.update({
        where: { id: parsedId },
        data: updateData,
      });

      logger.info(`ID ${id}의 May Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
      return updatedRequest;
    } catch (error) {
      logger.error(`ID ${id}의 May Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

   // 6. updatJun_received
   async updateJun_received(id, data) {
    try {
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        throw new Error('유효하지 않은 ID입니다.');
      }

      let updateData = { ...data };

      if ('jun_received' in data && typeof data.jun_received === 'boolean') {
        if (data.jun_received === true) {
          updateData.jun_received_date = new Date();  // 현재 시간으로 설정
        } else {
          updateData.jun_received_date = null;  // null로 초기화
        }
      } else {
        throw new Error('jun_received는 boolean이어야 합니다.');
      }

      const updatedRequest = await prisma.book_requests.update({
        where: { id: parsedId },
        data: updateData,
      });

      logger.info(`ID ${id}의 Jun Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
      return updatedRequest;
    } catch (error) {
      logger.error(`ID ${id}의 Jun Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

  // 7. updatJul_received
  async updateJul_received(id, data) {
    try {
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        throw new Error('유효하지 않은 ID입니다.');
      }

      let updateData = { ...data };

      if ('jul_received' in data && typeof data.jul_received === 'boolean') {
        if (data.jul_received === true) {
          updateData.jul_received_date = new Date();  // 현재 시간으로 설정
        } else {
          updateData.jul_received_date = null;  // null로 초기화
        }
      } else {
        throw new Error('jul_received는 boolean이어야 합니다.');
      }

      const updatedRequest = await prisma.book_requests.update({
        where: { id: parsedId },
        data: updateData,
      });

      logger.info(`ID ${id}의 Jul Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
      return updatedRequest;
    } catch (error) {
      logger.error(`ID ${id}의 Jul Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

  // 8. updatAug_received
  async updateAug_received(id, data) {
    try {
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        throw new Error('유효하지 않은 ID입니다.');
      }

      let updateData = { ...data };

      if ('aug_received' in data && typeof data.aug_received === 'boolean') {
        if (data.aug_received === true) {
          updateData.aug_received_date = new Date();  // 현재 시간으로 설정
        } else {
          updateData.aug_received_date = null;  // null로 초기화
        }
      } else {
        throw new Error('aug_received는 boolean이어야 합니다.');
      }

      const updatedRequest = await prisma.book_requests.update({
        where: { id: parsedId },
        data: updateData,
      });

      logger.info(`ID ${id}의 Aug Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
      return updatedRequest;
    } catch (error) {
      logger.error(`ID ${id}의 Aug Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

    // 9. updateSep_received
    async updateSep_received(id, data) {
      try {
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
          throw new Error('유효하지 않은 ID입니다.');
        }
  
        let updateData = { ...data };
  
        if ('sep_received' in data && typeof data.sep_received === 'boolean') {
          if (data.sep_received === true) {
            updateData.sep_received_date = new Date();  // 현재 시간으로 설정
          } else {
            updateData.sep_received_date = null;  // null로 초기화
          }
        } else {
          throw new Error('sep_received는 boolean이어야 합니다.');
        }
  
        const updatedRequest = await prisma.book_requests.update({
          where: { id: parsedId },
          data: updateData,
        });
  
        logger.info(`ID ${id}의 Sep Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
        return updatedRequest;
      } catch (error) {
        logger.error(`ID ${id}의 Sep Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
        throw new Error('데이터를 업데이트할 수 없습니다.');
      }
    }

    // 10. updateOct_received
    async updateOct_received(id, data) {
      try {
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
          throw new Error('유효하지 않은 ID입니다.');
        }
  
        let updateData = { ...data };
  
        if ('oct_received' in data && typeof data.oct_received === 'boolean') {
          if (data.oct_received === true) {
            updateData.oct_received_date = new Date();  // 현재 시간으로 설정
          } else {
            updateData.oct_received_date = null;  // null로 초기화
          }
        } else {
          throw new Error('oct_received는 boolean이어야 합니다.');
        }
  
        const updatedRequest = await prisma.book_requests.update({
          where: { id: parsedId },
          data: updateData,
        });
  
        logger.info(`ID ${id}의 Oct Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
        return updatedRequest;
      } catch (error) {
        logger.error(`ID ${id}의 Oct Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
        throw new Error('데이터를 업데이트할 수 없습니다.');
      }
    }

     // 11. updateNov_received
     async updateNov_received(id, data) {
      try {
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
          throw new Error('유효하지 않은 ID입니다.');
        }
  
        let updateData = { ...data };
  
        if ('nov_received' in data && typeof data.nov_received === 'boolean') {
          if (data.nov_received === true) {
            updateData.nov_received_date = new Date();  // 현재 시간으로 설정
          } else {
            updateData.nov_received_date = null;  // null로 초기화
          }
        } else {
          throw new Error('nov_received는 boolean이어야 합니다.');
        }
  
        const updatedRequest = await prisma.book_requests.update({
          where: { id: parsedId },
          data: updateData,
        });
  
        logger.info(`ID ${id}의 Nov Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
        return updatedRequest;
      } catch (error) {
        logger.error(`ID ${id}의 Nov Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
        throw new Error('데이터를 업데이트할 수 없습니다.');
      }
    }

    // 12. updateDec_received
    async updateDec_received(id, data) {
      try {
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
          throw new Error('유효하지 않은 ID입니다.');
        }
  
        let updateData = { ...data };
  
        if ('dec_received' in data && typeof data.dec_received === 'boolean') {
          if (data.dec_received === true) {
            updateData.dec_received_date = new Date();  // 현재 시간으로 설정
          } else {
            updateData.dec_received_date = null;  // null로 초기화
          }
        } else {
          throw new Error('dec_received는 boolean이어야 합니다.');
        }
  
        const updatedRequest = await prisma.book_requests.update({
          where: { id: parsedId },
          data: updateData,
        });
  
        logger.info(`ID ${id}의 Dec Book Request 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedRequest)}`);
        return updatedRequest;
      } catch (error) {
        logger.error(`ID ${id}의 Dec Book Request 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
        throw new Error('데이터를 업데이트할 수 없습니다.');
      }
    }

}

module.exports = new BookRequestsService();