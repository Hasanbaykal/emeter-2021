const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    profile_picture: {
        type: Image
    },
    about_me: {
        type: String
    }
});

module.exports = mongoose.model('Profile', ProfileSchema);