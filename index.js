const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// Requiring Mongoose Schemas
require('./models/Item');
// Mapping global promisses
mongoose.Promise = global.Promise;

// Requiring Routes
const items = require('./routes/api/items');

// Loading Routes

// Launch Express
const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

//Connect to Mongose
mongoose
	.connect(keys.mongoURI, { useNewUrlParser: true })
	.then(console.log('MongoDB connected...'))
	.catch((err) => console.log(err));

// Use Routes
app.use('/api/items', items);
app.use('/', (req, res) => res.send('Hellooooo'));

// Set up for production
if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like main.js or main.css
	app.use(express.static('dist'));
	// Express will serve up index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
	});
}

// Listen on port 5000 if not set by environment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
