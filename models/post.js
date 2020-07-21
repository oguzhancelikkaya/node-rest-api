const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema)