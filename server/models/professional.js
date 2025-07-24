const mongoose = require('mongoose');

const professionalSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: String,
    email: String,
    specialty: String,
    phone: String,
    imageUrl: String
});

module.exports = mongoose.model('Professional', professionalSchema);
