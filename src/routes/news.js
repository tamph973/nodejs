const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Tuyến đường sẽ đi từ trên xuống hoặc từ phải qua
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
