const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3
    },
    author: {
        type: String,
        required: true,
        min: 3
    },
    description: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: Date,
        required: true,
    },
    pageCount: {
        type: Number,
        required: true,
    },
    category: {
        
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Book", bookSchema);


