const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    // title: String,
    // content: String
    name: 'string',
    summary: 'string',
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('', NoteSchema, 'listingsAndReviews');