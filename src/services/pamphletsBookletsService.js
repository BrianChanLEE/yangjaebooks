const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const logger = require('../middleware/logger');  // 로그 시스템 추가

class PamphletsBookletsService {
  async getAllPamphletsBooklets() {
    try {
      const pamphletsBooklets = await prisma.pamphlets_Booklets.findMany();
      return pamphletsBooklets;
    } catch (error) {
      logger.error(`Pamphlets & Booklets 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 가져올 수 없습니다.');
    }
  }

  async getPamphletBookletById(id) {
    try {
      const pamphletBooklet = await prisma.pamphlets_Booklets.findUnique({
        where: { id: parseInt(id) },
      });
      if (!pamphletBooklet) {
        throw new Error('해당 ID의 Pamphlets & Booklets 데이터가 없습니다.');
      }
      return pamphletBooklet;
    } catch (error) {
      logger.error(`ID ${id}의 Pamphlets & Booklets 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 가져올 수 없습니다.');
    }
  }

  async createPamphletBooklet(data) {
    try {
      const newPamphletBooklet = await prisma.pamphlets_Booklets.create({
        data,
      });
      return newPamphletBooklet;
    } catch (error) {
      logger.error(`Pamphlets & Booklets 데이터를 생성하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 생성할 수 없습니다.');
    }
  }

  async updatePamphletBooklet(id, data) {
    try {
      const updatedPamphletBooklet = await prisma.pamphlets_Booklets.update({
        where: { id: parseInt(id) },
        data,
      });
      return updatedPamphletBooklet;
    } catch (error) {
      logger.error(`ID ${id}의 Pamphlets & Booklets 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

  async deletePamphletBooklet(id) {
    try {
      await prisma.pamphlets_Booklets.delete({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      logger.error(`ID ${id}의 Pamphlets & Booklets 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 삭제할 수 없습니다.');
    }
  }
}

module.exports = new PamphletsBookletsService();