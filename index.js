// Set up for production
if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
  // like main.js or main.css
	app.use(express.static('./dist'));
	// Express will serve up index.html file
  // if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(
			__dirname, 'dist', 'index.html'
		))
	})
}

require('./src/server/server')