const mongoose = require('mongoose');

const SpeciesSchema = new mongoose.Schema({
    name: { type: 'String', required: true },
    picUrl: { type: 'String', default: './images/species/speciesDefault.png'},
    dateAdded: { type: 'Date', default: Date.now, required: true }
});

module.exports = mongoose.model('Species', SpeciesSchema);
