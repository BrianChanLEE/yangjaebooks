const express = require("express");
const booksController = require('../controllers/booksController');
const router = express.Router();


router.get('/books', booksController.getAllBooks);
router.get('/books/:id', booksController.getBookById);
router.post('/books', booksController.createBook);
router.put('/books/:id', booksController.updateBook);
router.delete('/books/:id', booksController.deleteBook);






// 메인 페이지 라우트
router.get("/main", (req, res) => {
  res.render("main", { title: "스케줄 관리 시스템" });
});

// 기본 홈 라우트 (메인 페이지로 리다이렉트)
router.get("/", (req, res) => {
  res.redirect("/main");
});

router.get("/three",(req,res)=>{
    res.render("Three",{title:"재고 관리 시스템"})
})

router.get("/list",(req,res)=>{
    res.render("BookList",{title:"서적리스트"})
})
module.exports = router;