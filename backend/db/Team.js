const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: String,
    country: String,
    city: String
});


module.exports = mongoose.model("teams", teamSchema);