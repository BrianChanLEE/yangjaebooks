const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const logger = require('../middleware/logger');  // 로그 시스템 추가

class BooksLargeSizeEditionService {
  async getAllBooksLargeSizeEditions() {
    try {
      const booksLargeSizeEditions = await prisma.books_Large_Size_Edition.findMany();
      logger.info('모든 Books Large Size Edition 데이터를 성공적으로 가져왔습니다.');
      return booksLargeSizeEditions;
    } catch (error) {
      logger.error(`Books Large Size Edition 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 가져올 수 없습니다.');
    }
  }

  async getBookLargeSizeEditionById(id) {
    try {
      const bookLargeSizeEdition = await prisma.books_Large_Size_Edition.findUnique({
        where: { id: parseInt(id) },
      });
      if (!bookLargeSizeEdition) {
        throw new Error('해당 ID의 Books Large Size Edition 데이터가 없습니다.');
      }
      logger.info(`ID ${id}의 Books Large Size Edition 데이터를 성공적으로 가져왔습니다.`);
      return bookLargeSizeEdition;
    } catch (error) {
      logger.error(`ID ${id}의 Books Large Size Edition 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 가져올 수 없습니다.');
    }
  }

  async createBookLargeSizeEdition(data) {
    try {
      const newBookLargeSizeEdition = await prisma.books_Large_Size_Edition.create({
        data,
      });
      logger.info(`새로운 Books Large Size Edition 데이터 생성됨: ${JSON.stringify(newBookLargeSizeEdition)}`);
      return newBookLargeSizeEdition;
    } catch (error) {
      logger.error(`Books Large Size Edition 데이터를 생성하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 생성할 수 없습니다.');
    }
  }

  async updateBookLargeSizeEdition(id, data) {
    try {
      const updatedBookLargeSizeEdition = await prisma.books_Large_Size_Edition.update({
        where: { id: parseInt(id) },
        data,
      });
      logger.info(`ID ${id}의 Books Large Size Edition 데이터가 성공적으로 업데이트되었습니다: ${JSON.stringify(updatedBookLargeSizeEdition)}`);
      return updatedBookLargeSizeEdition;
    } catch (error) {
      logger.error(`ID ${id}의 Books Large Size Edition 데이터를 업데이트하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 업데이트할 수 없습니다.');
    }
  }

  async deleteBookLargeSizeEdition(id) {
    try {
      await prisma.books_Large_Size_Edition.delete({
        where: { id: parseInt(id) },
      });
      logger.info(`ID ${id}의 Books Large Size Edition 데이터가 성공적으로 삭제되었습니다.`);
    } catch (error) {
      logger.error(`ID ${id}의 Books Large Size Edition 데이터를 삭제하는 중 오류 발생: ${error.message}`);
      throw new Error('데이터를 삭제할 수 없습니다.');
    }
  }
}

module.exports = new BooksLargeSizeEditionService();