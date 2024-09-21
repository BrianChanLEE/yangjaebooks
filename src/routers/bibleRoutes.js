const express = require('express');
const bibleController = require('../controllers/bibleController');
const router = express.Router();

router.get('/bibles', (req, res, next) => {
  next();
}, bibleController.getAllBibles);

router.get('/bibles/:id', (req, res, next) => {
  next();
}, bibleController.getBibleById);

router.post('/bibles', (req, res, next) => {
  next();
}, bibleController.createBible);

router.put('/bibles/:id', (req, res, next) => {
  next();
}, bibleController.updateBible);

router.delete('/bibles/:id', (req, res, next) => {
  next();
}, bibleController.deleteBible);

module.exports = router;