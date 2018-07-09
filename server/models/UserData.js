const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDataSchema = new mongoose.Schema({
    name: { type: 'String', required: true },
    email: { type: 'String', required: true},
    password: { type: 'String', required: true },
    favorites: Array,
    picUrl: { type: String, default: './images/user/ann.jpg' },
});

module.exports = mongoose.model('UserData', UserDataSchema);
