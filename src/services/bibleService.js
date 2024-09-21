const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const logger = require('../middleware/logger');

class BibleService {
  async getAllBibles() {
    try {
      const bibles = await prisma.bible.findMany();
      return bibles;
    } catch (error) {
      logger.error(`성경 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 가져올 수 없습니다.');
    }
  }

  async getBibleById(id) {
    try {
      const bible = await prisma.bible.findUnique({
        where: { id: parseInt(id) },
      });
      if (!bible) {
        throw new Error('해당 ID의 성경 데이터가 없습니다.');
      }
      return bible;
    } catch (error) {
      logger.error(`ID ${id}에 대한 성경 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 가져올 수 없습니다.');
    }
  }

  async createBible(data) {
    try {
      const newBible = await prisma.bible.create({
        data,
      });
      logger.info(`새로운 성경 데이터 생성됨: ${JSON.stringify(newBible)}`);
      return newBible;
    } catch (error) {
      logger.error(`성경 데이터를 생성하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 생성할 수 없습니다.');
    }
  }

  async updateBible(id, data) {
    try {
      const updatedBible = await prisma.bible.update({
        where: { id: parseInt(id) },
        data,
      });
      logger.info(`ID ${id}의 성경 데이터가 업데이트됨: ${JSON.stringify(updatedBible)}`);
      return updatedBible;
    } catch (error) {
      logger.error(`ID ${id}의 성경 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

  async deleteBible(id) {
    try {
      await prisma.bible.delete({
        where: { id: parseInt(id) },
      });
      logger.info(`ID ${id}의 성경 데이터가 삭제됨`);
    } catch (error) {
      logger.error(`ID ${id}의 성경 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 삭제할 수 없습니다.');
    }
  }
}

module.exports = new BibleService();