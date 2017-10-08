const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(cors())

Genre = require('./models/genre');
Book = require('./models/book');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
let db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/genres');
});

/* Genre API */

// app.get('/api/genres', (req, res) => {
// 	Genre.getGenres((err, genres) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(genres);
// 	});
// });

// app.get('/api/genres', (req, res) => {
// 	Genre.getGenres()
// 		.then(result => {
// 			res.json(result);
// 		})
// 		.catch(err => {
// 			res.json(err);
// 		});
// });

// app.get('/api/genres/:_id', (req, res) => {
// 	let id = req.params._id;
// 	let genre = req.body;
// 	Genre.getGenreById(id, (err, genre) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(genre);
// 	});
// });

// app.get('/api/genres/:_id', (req, res) => {
// 	let id = req.params._id;
// 	let genre = req.body;
// 	Genre.getGenreById(id)
// 		.then(result => {
// 			res.json(result);
// 		})
// 		.catch(err => {
// 			res.json(err);
// 		});
// });

// app.post('/api/genres/add', (req, res) => {
// 	let genre = req.body;
// 	Genre.addGenre(genre, (err, genre) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(genre);
// 	});
// });

// app.post('/api/genres/add', (req, res) => {
// 	let genre = req.body;
// 	Genre.addGenre(genre)
// 		.then(result => {
// 			res.json(result);
// 		})
// 		.catch(err => {
// 			res.json(err);
// 		});
// });

// app.put('/api/genres/update/:_id', (req, res) => {
// 	let id = req.params._id;
// 	let genre = req.body;
// 	Genre.updateGenre(id, genre, {}, (err, genre) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(genre);
// 	});
// });

// app.put('/api/genres/update/:_id', (req, res) => {
// 	let id = req.params._id;
// 	let genre = req.body;
// 	Genre.updateGenre(id, genre, {})
// 		.then(result => {
// 			res.json(result);
// 		})
// 		.catch(err => {
// 			res.json(err);
// 		});
// });

// app.delete('/api/genres/delete/:_id', (req, res) => {
// 	let id = req.params._id;
// 	Genre.removeGenre(id, (err, result) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(result);
// 	});
// });

// app.delete('/api/genres/delete/:_id', (req, res) => {
// 	let id = req.params._id;
// 	Genre.removeGenre(id)
// 		.then(result => {
// 			res.json(result);
// 		})
// 		.catch(err => {
// 			res.json(err);
// 		})
// });

/* Book API */

app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
		if (err) {
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if (err) {
			throw err;
		}

		res.json(book);
	});
});

app.post('/api/books/add', (req, res) => {
	let book = req.body;
	Book.addBook(book, (err, book) => {
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/books/update/:_id', (req, res) => {
	let id = req.params._id;
	let book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/delete/:_id', (req, res) => {
	let id = req.params._id;
	Book.removeBook(id, (err, result) => {
		if (err) {
			throw err;
		}
		res.json(result);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
