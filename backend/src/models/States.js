import mongoose from 'mongoose';

const states = mongoose.Schema({
    id: Number,
    name: String,
    path: String,
    image: String,
    description: String
});

export default new mongoose.model('State', states);