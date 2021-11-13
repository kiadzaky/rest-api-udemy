const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./src/routes/index');
//const users = require("./routes/api/users");
const path = require('path');
mongoose.connect('mongodb://localhost/blog', {
	useNewUrlParser: true,
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('server running on port ' + port));
