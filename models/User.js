const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    logo: {
        type: String,
        required: false
    },
    companyName: {
        type: String,
        required: false
    },
    companyDescription: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    tags: {
        type: [{name: String, id: Number}],
        required: false
    },
    fopCode: {
        type: String,
        required: false
    },
    isSubscriber: {
        type: Boolean,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);
