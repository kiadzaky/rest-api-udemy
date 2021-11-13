const routes = (app) => {
	const getBlog = require('../controllers/crmController');
	app
		.route('/blog')
		.get((req, res) => {
			res.send(`GET METHOD`);
		})
		.post((req, res) => {
			res.send(`POST METHOD`);
		})
		.put((req, res) => {
			res.send(`PUT METHOD`);
		})
		.delete((req, res) => {
			res.send(`DELETE METHOD`);
		});
};
module.exports = routes;
