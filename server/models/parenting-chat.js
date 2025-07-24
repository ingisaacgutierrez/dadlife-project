const mongoose = require('mongoose');

const parentingChatSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    msgText: { type: String, required: true },
    sender: { type: String, required: true },
});

module.exports = mongoose.model('ParentingChat', parentingChatSchema);


