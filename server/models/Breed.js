const mongoose = require('mongoose');

const BreedSchema = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String},//ObjectId
    picUrl: { type: String, default: './images/breed/breedDefault.png' },

    backPicUrl: {type: String, default: './images/breed/breedDefault.png'},
    realPicUrl: {type: String, default: './images/breed/breedDefault.png'},
    information: {
        temperament: String,
        lifeSpan: String,
        price: String,
        avgSize:String,
        origin: String,
        color: String,
        weight: String
    },

    characteristics: {
        affection: Number,
        inquisitive: Number,
        bark: Number,
        odour: Number,
        sheddingAmount: Number
    },

    temperament: String,
    diet: String,
    housing: String,
    toys: String,
    clean: String,

    training: String,
    health: String,

    likes: { type: Number, default: 0},
    dateAdded: { type: 'Date', default: Date.now, required: true }
});

module.exports = mongoose.model('Breed', BreedSchema);
