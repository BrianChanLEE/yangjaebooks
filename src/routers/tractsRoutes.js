const express = require('express');
const tractsController = require('../controllers/tractsController');
const router = express.Router();

router.get('/tracts', tractsController.getAllTracts);
router.get('/tracts/:id', tractsController.getTractById);
router.post('/tracts', tractsController.createTract);
router.put('/tracts/:id', tractsController.updateTract);
router.delete('/tracts/:id', tractsController.deleteTract);

module.exports = router;