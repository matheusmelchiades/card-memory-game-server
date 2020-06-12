/** @type {import('../../../../engine/dao/handlers/Mongo')} */
const { ObjectId } = global.databases[process.env.MONGO_GLOBAL_NAME];


const difficulties = [
    {
        '_id': '5ed870e8eecb47237bdcb243',
        'name': 'Muito fácil',
        'time': 60,
        'cards_length': 8
    },
    {
        '_id': '5ed870e8e05d6a46f6bde42e',
        'name': 'Fácil',
        'time': 80,
        'cards_length': 12
    },
    {
        '_id': '5ed870e8818f3ec65ef6148b',
        'name': 'Normal',
        'time': 120,
        'cards_length': 16
    },
    {
        '_id': '5ed870e8bc71752d377a0c33',
        'name': 'Difícil',
        'time': 140,
        'cards_length': 24
    },
    {
        '_id': '5ed870e8f0163e07dadb8817',
        'name': 'Muito difícil',
        'time': 150,
        'cards_length': 30
    }
];


module.exports.getDifficulties = () => {

    return difficulties;
};

module.exports.getDifficultyById = id => {

    return difficulties.find(diff => {
        return ObjectId(diff._id).equals(id);
    });
};
