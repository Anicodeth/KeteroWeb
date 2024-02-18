const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Service routes
router.get('/', serviceController.getServices);
router.get('/:id', serviceController.getService);
router.post('/', serviceController.createService);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

module.exports = router;
