import Grade from '../models/Grades.js';

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

export default {
    async store(req, res) {
        const { user, rating, text } = req.body;

        const x = new Date();

        const experience = await Grade.create({
            user,
            date: `${x.getHours()}:${x.getMinutes()} - ${pad(x.getDate())}/${pad(x.getMonth()+1)}/${x.getFullYear()}`,
            rating,
            text
        });

        return res.json(experience);
    }
}