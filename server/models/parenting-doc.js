const mongoose = require('mongoose');

const parentingDocSchema = mongoose.Schema({
    id: { type: String, required: true },
    title: String,
    description: String,
    url: String
});

module.exports = mongoose.model('ParentingDoc', parentingDocSchema);
