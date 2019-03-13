// Set up for production
if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
  // like main.js or main.css
	require('./dist/index_bundle.js');
	// app.use(express.static('./dist'));
}

require('./src/server/server')