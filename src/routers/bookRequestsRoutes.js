const express = require('express');
const bookRequestsController = require('../controllers/bookRequestsController');
const router = express.Router();

router.get('/book-requests', bookRequestsController.getAllBookRequests);
router.get('/book-requests/:id', bookRequestsController.getBookRequestById);
router.post('/book-requests', bookRequestsController.createBookRequest);
router.put('/book-requests/:id', bookRequestsController.updateBookRequest);

router.put('/book-requests/:id/Jan', bookRequestsController.updateJan_receivedRequest);
router.put('/book-requests/:id/Feb', bookRequestsController.updateFeb_receivedRequest);
router.put('/book-requests/:id/Mar', bookRequestsController.updateMar_receivedRequest);
router.put('/book-requests/:id/Apr', bookRequestsController.updateApr_receivedRequest);
router.put('/book-requests/:id/May', bookRequestsController.updateMay_receivedRequest);
router.put('/book-requests/:id/Jun', bookRequestsController.updatJun_receivedRequest);
router.put('/book-requests/:id/Jul', bookRequestsController.updatJul_receivedRequest);
router.put('/book-requests/:id/Aug', bookRequestsController.updatAug_receivedRequest);
router.put('/book-requests/:id/Sep', bookRequestsController.updateSep_receivedRequest);
router.put('/book-requests/:id/Oct', bookRequestsController.updateOct_receivedRequest);
router.put('/book-requests/:id/Nov', bookRequestsController.updateNov_receivedRequest);
router.put('/book-requests/:id/Dec', bookRequestsController.updateDec_receivedRequest);


router.delete('/book-requests/:id', bookRequestsController.deleteBookRequest);

module.exports = router;  