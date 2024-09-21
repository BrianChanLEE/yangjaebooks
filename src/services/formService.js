const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const logger = require("../middleware/logger"); // Winston logger 추가

class FormService {
  async getAllForms() {
    try {
      const forms = await prisma.form.findMany();
      return forms;
    } catch (error) {
      logger.error(`Form 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error("데이터를 가져올 수 없습니다.");
    }
  }

  async getFormById(id) {
    try {
      const form = await prisma.form.findUnique({
        where: { id: parseInt(id) },
      });
      if (!form) {
        throw new Error("해당 ID의 Form 데이터가 없습니다.");
      }
      return form;
    } catch (error) {
      logger.error(
        `ID ${id}의 Form 데이터를 가져오는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 가져올 수 없습니다.");
    }
  }

  async createForm(data) {
    try {
      const newForm = await prisma.form.create({
        data,
      });
      return newForm;
    } catch (error) {
      logger.error(`Form 데이터를 생성하는 중 오류 발생: ${error.message}`);
      throw new Error("데이터를 생성할 수 없습니다.");
    }
  }

  async updateForm(id, data) {
    try {
      const updatedForm = await prisma.form.update({
        where: { id: parseInt(id) },
        data,
      });
      return updatedForm;
    } catch (error) {
      logger.error(
        `ID ${id}의 Form 데이터를 업데이트하는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 업데이트할 수 없습니다.");
    }
  }

  async deleteForm(id) {
    try {
      await prisma.form.delete({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      logger.error(
        `ID ${id}의 Form 데이터를 삭제하는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 삭제할 수 없습니다.");
    }
  }
}

module.exports = new FormService();
