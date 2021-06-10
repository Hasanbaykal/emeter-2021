const express = require('express');
const router = express.Router();
const Profile = require('../models/Log');


router.post('/log', (req,res) => {
    console.log(req.body);
});

module.exports = router;