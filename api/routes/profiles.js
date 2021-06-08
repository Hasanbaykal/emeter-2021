const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');


router.post('/profile', (req,res) => {
    console.log(req.body);
});

module.exports = router;