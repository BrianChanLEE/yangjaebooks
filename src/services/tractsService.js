const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const logger = require("../middleware/logger"); // 로그 시스템 추가

class TractsService {
  async getAllTracts() {
    try {
      const tracts = await prisma.tRACTS.findMany();

      return tracts;
    } catch (error) {
      logger.error(`TRACTS 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error("데이터를 가져올 수 없습니다.");
    }
  }

  async getTractById(id) {
    try {
      const tract = await prisma.tRACTS.findUnique({
        where: { id: parseInt(id) },
      });
      if (!tract) {
        throw new Error("해당 ID의 TRACTS 데이터가 없습니다.");
      }

      return tract;
    } catch (error) {
      logger.error(
        `ID ${id}의 TRACTS 데이터를 가져오는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 가져올 수 없습니다.");
    }
  }

  async createTract(data) {
    try {
      const newTract = await prisma.tRACTS.create({
        data,
      });

      return newTract;
    } catch (error) {
      logger.error(`TRACTS 데이터를 생성하는 중 오류 발생: ${error.message}`);
      throw new Error("데이터를 생성할 수 없습니다.");
    }
  }

  async updateTract(id, data) {
    try {
      const updatedTract = await prisma.tRACTS.update({
        where: { id: parseInt(id) },
        data,
      });

      return updatedTract;
    } catch (error) {
      logger.error(
        `ID ${id}의 TRACTS 데이터를 업데이트하는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 업데이트할 수 없습니다.");
    }
  }

  async deleteTract(id) {
    try {
      await prisma.tRACTS.delete({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      logger.error(
        `ID ${id}의 TRACTS 데이터를 삭제하는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 삭제할 수 없습니다.");
    }
  }
}

module.exports = new TractsService();
