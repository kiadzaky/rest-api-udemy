const mongoose = require('mongoose');
const BlogSchema = require('../models/crmModel');
const blogModel = mongoose.model('blog', BlogSchema);

// var getAll = (req, res) => {
// 	blogModel.find({}, (err, blog) => {
// 		if (err) {
// 			res.send(err);
// 		} else {
// 			res.json(blog);
// 		}
// 	});
// };
// module.exports = getAll;
exports.getAll = async (req, res) => {
	try {
		// ambil semua data
		const blog = await blogModel.find();

		// disini jika kita tidak menambahkan .status(xxx) maka respon kodenya 200
		return res.json(blog);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
};
exports.create = async (req, res) => {
	try {
		let blog = new blogModel(req.body);
		blog.save((err, blogModel) => {
			if (err) {
				res.send(err);
			}
			res.json(blog);
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
};

exports.getOne = async (req, res) => {
	const { id } = req.params;
	try {
		// jika parameter id tidak ada, kirim respon error
		const blog = await blogModel.findOne({ _id: id });

		return res.json(blog);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
};

exports.update = async (req, res) => {
	const { id } = req.params;
	const { text, checked } = req.body;
	try {
		const blog = await blogModel.findOneAndUpdate({ _id: id }, req.body, {
			new: true,
		});

		return res.json({ message: 'Sukses', data: blog });
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
};
// Proses Delete
exports.delete = async (req, res) => {
	// ambil parameter id
	const { id } = req.params;

	try {
		const deleteBlog = await blogModel.deleteOne({ _id: id });
		return res.json({ message: 'Sukses dihapus.' });
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
};
