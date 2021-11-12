var express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./src/routes/crmRoutes");
const mongoose = require("mongoose");
const BlogSchema = require("./src/models/crmModel");
const blogModel = mongoose.model("blog", BlogSchema);
const bodyParser = require("body-parser");

// mongoose connect
mongoose.connect("mongodb://localhost/blog", {
	useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST
app.post("/newBlog", (req, res) => {
	let blog = new blogModel(req.body);
	blog.save((err, blogModel) => {
		if (err) {
			res.send(err);
		}
		res.json(blog);
	});
});

//GET
app.get("/", (req, res) => {
	blogModel.find({}, (err, blog) => {
		if (err) {
			res.send(err);
		} else {
			res.json(blog);
		}
	});
});

// const Cat = mongoose.model("Cat", { name: String });
// const kitty = new Cat({ name: "mimi" });
// kitty.save().then((res) => {
// 	console.log(res);
// 	console.log("Meow");
// });
//ROUTING
//routes(app);

// middleware
// app.use(function (res, req, next) {
// 	console.log("DATE", Date.now());
// });

// app.get(
// 	"/",
// 	function (req, res, next) {
// 		console.log("req method", req.method);
// 		next();
// 	},
// 	function (req, res, next) {
// 		console.log("Request ori url", req.originalUrl);
// 		next();
// 	},
// 	function (req, res, next) {
// 		res.send("Request Was Success");
// 	}
// );

app.listen(PORT, () => {
	console.log(`Server running : ${PORT}`);
});
