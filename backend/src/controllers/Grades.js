import Grade from '../models/Grades.js';

export default {
    async index(req, res) {
        const grades = await Grade.find();

        return res.json(grades);
    },
    async delete(req, res) {
        var grades = await Grade.find();
        grades.map(async g => {
            await Grade.findOneAndDelete({ _id: g._id });
        });

        grades = await Grade.find();
        
        if(grades.length === 0) {
            return res.json({ result: "Todos os dados foram apagados" });
        } else {
            return res.json({ result: "Ocorreu algum erro" });
        }
    }
}