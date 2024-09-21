const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const logger = require("../middleware/logger"); // 로그 시스템 추가

class BooksService {
  async getAllBooks() {
    try {
      const books = await prisma.books.findMany();
      return books;
    } catch (error) {
      logger.error(`Books 데이터를 가져오는 중 오류 발생: ${error.message}`);
      throw new Error("데이터를 가져올 수 없습니다.");
    }
  }

  async getBookById(id) {
    try {
      const book = await prisma.books.findUnique({
        where: { id: parseInt(id) },
      });
      if (!book) {
        throw new Error("해당 ID의 Book 데이터가 없습니다.");
      }
      return book;
    } catch (error) {
      logger.error(
        `ID ${id}의 Book 데이터를 가져오는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 가져올 수 없습니다.");
    }
  }

  async createBook(data) {
    try {
      const newBook = await prisma.books.create({
        data,
      });

      return newBook;
    } catch (error) {
      logger.error(`Book 데이터를 생성하는 중 오류 발생: ${error.message}`);
      throw new Error("데이터를 생성할 수 없습니다.");
    }
  }

  async updateBook(id, data) {
    try {
      const updatedBook = await prisma.books.update({
        where: { id: parseInt(id) },
        data,
      });

      return updatedBook;
    } catch (error) {
      logger.error(
        `ID ${id}의 Book 데이터를 업데이트하는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 업데이트할 수 없습니다.");
    }
  }

  async deleteBook(id) {
    try {
      await prisma.books.delete({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      logger.error(
        `ID ${id}의 Book 데이터를 삭제하는 중 오류 발생: ${error.message}`
      );
      throw new Error("데이터를 삭제할 수 없습니다.");
    }
  }
}

module.exports = new BooksService();
