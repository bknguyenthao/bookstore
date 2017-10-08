const mongoose = require('mongoose');

// Genre Schema
const genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
// module.exports.getGenres = (callback, limit) => {
// 	Genre.find(callback).limit(limit);
// }

module.exports.getGenres = (limit) => {
	return Genre.find((err, result) => {
		return new Promise((resolve, reject) => {
			if (err) reject(err);
			else resolve(result);
		})
	}).limit(limit);
}

// Get Genre
// module.exports.getGenreById = (id, callback) => {
// 	Genre.findById(id, callback);
// }

module.exports.getGenreById = (id) => {
	return Genre.findById(id, (err, result) => {
		return new Promise((resolve, reject) => {
			if (err) reject(err);
			else resolve(result);
		})
	});
}

// Add Genre
// module.exports.addGenre = (genre, callback) => {
// 	Genre.create(genre, callback);
// }

module.exports.addGenre = (genre) => {
	return Genre.create(genre, (err, result) => {
		return new Promise((resolve, reject) => {
			if (err) reject(err);
			else resolve(result);
		})
	});
}

// Update Genre
// module.exports.updateGenre = (id, genre, options, callback) => {
// 	let query = { _id: id };
// 	let update = {
// 		name: genre.name
// 	}
// 	Genre.findOneAndUpdate(query, update, options, callback);
// }

module.exports.updateGenre = (id, genre, options) => {
	let query = { _id: id };
	let update = {
		name: genre.name
	}
	return Genre.findOneAndUpdate(query, update, options, (err, result) => {
		return new Promise((resolve, reject) => {
			if (err) reject(err);
			else resolve(result);
		})
	});
}

// Delete Genre
// module.exports.removeGenre = (id, callback) => {
// 	let query = {_id: id};
// 	Genre.remove(query, callback);
// }

module.exports.removeGenre = (id) => {
	let query = { _id: id };
	return Genre.remove(query, (err) => {
		return new Promise((resolve, reject) => {
			if (err) reject(err);
			else resolve("Remove success");
		})
	});
}
