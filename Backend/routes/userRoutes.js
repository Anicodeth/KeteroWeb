const router = require('express').Router();
const userController = require('../controllers/userController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

router.use(authMiddleware);

router.get('/', userController.getUser);

module.exports = router;