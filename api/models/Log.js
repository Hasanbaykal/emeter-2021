const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
    emoji: {
        type: String,
        required: true
    },
    emoji_power: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }

});

module.exports = mongoose.model('Log', LogSchema);