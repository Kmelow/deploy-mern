const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// Requiring Mongoose Schemas
require('./models/Item');
// Mapping global promisses
mongoose.Promise = global.Promise;

// Loading Routes

// Launch Express
const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

//Connect to Mongose
mongoose
	.connect(keys.mongoURI, { useNewUrlParser: true })
	.then(console.log('MongoDB connected...'))
	.catch(err => console.log(err));

// 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
