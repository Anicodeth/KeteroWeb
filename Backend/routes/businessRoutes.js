const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');

// Business routes
router.get('/', businessController.getBusinesses);
router.get('/:id', businessController.getBusiness);
router.post('/:businessId/service', businessController.addServiceToBusiness);
router.get('/:businessId/services', businessController.getBusinessServices);
router.put('/:id', businessController.updateBusiness);
router.delete('/:id', businessController.deleteBusiness);

module.exports = router;
