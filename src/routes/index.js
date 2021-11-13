const express = require('express');
const router = express.Router();

// import route todo.js yang sudah kita buat tadi
const todoRoutes = require('./crmRoutes');

// route ini mengarah ke http://localhost:1337/
router.get('/', async (req, res) => {
	res.json({ message: 'Halo!' });
});
// route yang ini mengarah ke http://localhost:1337/todos
router.use('/blog', todoRoutes);

module.exports = router;
