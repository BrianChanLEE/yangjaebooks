const express = require('express');
const pamphletsBookletsController = require('../controllers/pamphletsBookletsController');
const router = express.Router();

router.get('/pamphlets-booklets', pamphletsBookletsController.getAllPamphletsBooklets);
router.get('/pamphlets-booklets/:id', pamphletsBookletsController.getPamphletBookletById);
router.post('/pamphlets-booklets', pamphletsBookletsController.createPamphletBooklet);
router.put('/pamphlets-booklets/:id', pamphletsBookletsController.updatePamphletBooklet);
router.delete('/pamphlets-booklets/:id', pamphletsBookletsController.deletePamphletBooklet);

module.exports = router;