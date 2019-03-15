const express = require('express');

// Requiring routes
const item = require('./src/server/routes/api/item');

// Start server
const app = express();

// Load routes
app.use('/api/item', item);

// Home page
app.use(express.static('dist'));

// Define port
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
