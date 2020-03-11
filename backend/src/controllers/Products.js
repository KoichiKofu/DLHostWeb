import Product from '../models/Products.js';

export default {
    async index(req, res) {
        const { id } = req.query;
        const produtos = await Product.find({ location: id });
        return res.json(produtos);
    },
    async store(req, res) {
        const { price, path, memory, location } = req.body;
        const produtos = await Product.find();
        const product = await Product.create({
            price,
            path,
            memory,
            location,
            id: produtos.length
        })
        return res.json(product);
    },
    async delete(req, res) {
        var produtos = await Product.find();
        produtos.map(async product => {
            await Product.findOneAndDelete({ _id: product._id });
        });
        produtos = await Product.find();
        return res.json(produtos);
    }
}