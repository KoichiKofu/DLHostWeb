import States from '../models/States.js';

export default {
    async store(req, res) {
        const { name, path, image, description } = req.body;
        console.log(req.body);
        const states = await States.find();
        const state = await States.create({
            id: states.length,
            name,
            path,
            image,
            description
        });

        return res.json(state);
    },
    async index(req, res) {
        const { name } = req.query;
        var states = [];
        if(name) {
            states = await States.findOne({ path: name });
        } else {
            states = await States.find();
        }
        console.log(states);
        return res.json(states);
    },
    async delete(req, res) {
        var states = await States.find();
        states.map(async tates => {
            await States.findOneAndDelete({ _id: tates._id });
        });
        states = await States.find();
        return res.json(states);
    }
}