const express = require('express');
const videoDvdController = require('../controllers/videoDvdController');
const router = express.Router();

router.get('/video-dvds', videoDvdController.getAllVideoDvds);
router.get('/video-dvds/:id', videoDvdController.getVideoDvdById);
router.post('/video-dvds', videoDvdController.createVideoDvd);
router.put('/video-dvds/:id', videoDvdController.updateVideoDvd);
router.delete('/video-dvds/:id', videoDvdController.deleteVideoDvd);

module.exports = router;