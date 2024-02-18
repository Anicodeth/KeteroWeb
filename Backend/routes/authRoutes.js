const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.post('/client', authController.createClient);

router.post('/business', authController.createBusiness);

router.post('/mezgebu', authController.createMezgeb)

router.post('/login', authController.loginUser);


module.exports = router;
