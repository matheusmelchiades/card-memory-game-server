/** @type {import('../../../../engine/dao/handlers/Mongo')} */
const db = global.databases[process.env.MONGO_GLOBAL_NAME];

const query = require('./query');

const collection = 'games';


module.exports.insert = payload => {
    const document = query.buildDocument(payload);

    return db.insertOne(collection, document);
};
