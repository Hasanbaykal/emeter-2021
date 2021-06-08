const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    profile_picture: Image,
    about_me: String
});

module.exports = mongoose.model('Profile', ProfileSchema);