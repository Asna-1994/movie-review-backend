const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    movie : {
        type : mongoose.ObjectId,
        ref : 'movieModel',
        required : true

    }
});

const reviewModel = mongoose.model('reviewModel', reviewSchema);
module.exports = reviewModel;