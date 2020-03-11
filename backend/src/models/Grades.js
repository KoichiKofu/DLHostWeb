import mongoose from 'mongoose';

const grades = mongoose.Schema({
    user: Number,
    date: String,
    rating: Number,
    text: String
});

export default new mongoose.model('Grade', grades);