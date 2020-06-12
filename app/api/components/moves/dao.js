/** @type {import('../../../../engine/dao/handlers/Mongo')} */
const db = global.databases[process.env.MONGO_GLOBAL_NAME];

const collection = 'moves';
const query = require('./queries');

module.exports.insertMove = (payload = {}) => {
    const document = query.buildDocument(payload);

    return db.insertOne(collection, document);
};
