/** @type {import('../../engine/dao/handlers/Mongo')} */
const db = global.databases[process.env.MONGO_GLOBAL_NAME];

const collection = 'ranking';

module.exports.insertUserInRanking = async payload => {

    return db.insertOne(collection, payload);
};

module.exports.getRankingTop50 = async () => {
    const pipeline = [
        { $sort: { pointing: -1 } },
        { $limit: 50 }
    ];

    return db.aggregate(collection, pipeline);
};

module.exports.getUserInRanking = async username => {
    const query = {
        'username': username
    };

    return db.findOne(collection, query);
};

module.exports.updateUserInRanking = ({ username, user }) => {

    const query = { 'username': username };
    const update = { '$set': user };

    return db.updateOne(collection, query, update, { 'upsert': true });
};