const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req,res) => {
    res.send('We are now on posts');
});

router.get('/detail', (req,res) => {
    res.send('this is a detail page');
});

router.post('/', (req,res) => {
    console.log(req.body);
});

module.exports = router;