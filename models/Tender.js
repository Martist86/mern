const mongoose = require('mongoose');

const TenderSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    getAddressFromAcc: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: false
    },
    getPhoneFromAcc: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: false
    },
    getEmailFromAcc: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String],
        required: true
    },
    subscribers: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true
    },
    open: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        required: true
    }
});

module.exports = Tender = mongoose.model('tender', TenderSchema);
