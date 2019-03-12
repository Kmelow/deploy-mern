const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

router.get('/', (req, res) => {
	res.send('MERN back end')
	// Item.find()
	// 	.sort({ date: -1 })
	// 	.then(items => res.json(items))
})

module.exports = router;