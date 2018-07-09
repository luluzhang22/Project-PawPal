const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserPetsDataSchema = new mongoose.Schema({
    email: { type: String, required: true},
    petName: String,
    petPicUrl: { type: String, default: './images/user/userDefault.png' },
    breed: String,
    gender: String,
    birthday: Date,
    color: String,
});

module.exports = mongoose.model('UserPetsData', UserPetsDataSchema);
