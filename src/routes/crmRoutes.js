const express = require('express');
const router = express.Router();

// import handler yang sudah kita buat tadi
const crmController = require('../controllers/crmController');

router.route('/').get(crmController.getAll).post(crmController.create);

router
	.route('/:id')
	.get(crmController.getOne)
	.put(crmController.update)
	.delete(crmController.delete);

module.exports = router;
