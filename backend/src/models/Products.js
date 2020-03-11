import mongoose from 'mongoose';

const products = mongoose.Schema({
    name: String,
    price: Number,
    path: String,
    memory: Number,
    id: Number,
    state: Number,
    location: Number
});

export default new mongoose.model('Product', products);