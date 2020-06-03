/** @type {import('../../engine/dao/handlers/Mongo')} */
const db = global.databases[process.env.MONGO_GLOBAL_NAME];

const collection = 'users';

module.exports.registerUser = payload => {

    return db.insertOne(collection, payload);
};

module.exports.getUserByUsername = username => {
    const query = {
        'username': username
    };

    return db.findOne(collection, query);
};