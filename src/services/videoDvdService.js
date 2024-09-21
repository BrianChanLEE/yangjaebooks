const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const logger = require("../middleware/logger"); // 로그 시스템 추가

class VideoDvdService {
  async getAllVideoDvds() {
    try {
      const videoDvds = await prisma.video_DVD.findMany();
      return videoDvds;
    } catch (error) {
      logger.error(
        `Video DVD 데이터를 가져오는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 가져올 수 없습니다.");
    }
  }

  async getVideoDvdById(id) {
    try {
      const videoDvd = await prisma.video_DVD.findUnique({
        where: { id: parseInt(id) },
      });
      if (!videoDvd) {
        throw new Error("해당 ID의 Video DVD 데이터가 없습니다.");
      }

      return videoDvd;
    } catch (error) {
      logger.error(
        `ID ${id}의 Video DVD 데이터를 가져오는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 가져올 수 없습니다.");
    }
  }

  async createVideoDvd(data) {
    try {
      const newVideoDvd = await prisma.video_DVD.create({
        data,
      });

      return newVideoDvd;
    } catch (error) {
      logger.error(
        `Video DVD 데이터를 생성하는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 생성할 수 없습니다.");
    }
  }

  async updateVideoDvd(id, data) {
    try {
      const updatedVideoDvd = await prisma.video_DVD.update({
        where: { id: parseInt(id) },
        data,
      });

      return updatedVideoDvd;
    } catch (error) {
      logger.error(
        `ID ${id}의 Video DVD 데이터를 업데이트하는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 업데이트할 수 없습니다.");
    }
  }

  async deleteVideoDvd(id) {
    try {
      await prisma.video_DVD.delete({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      logger.error(
        `ID ${id}의 Video DVD 데이터를 삭제하는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 삭제할 수 없습니다.");
    }
  }
}

module.exports = new VideoDvdService();
