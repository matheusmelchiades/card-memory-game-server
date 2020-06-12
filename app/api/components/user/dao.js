/** @type {import('../../../../engine/dao/handlers/Mongo')} */
const db = global.databases[process.env.MONGO_GLOBAL_NAME];

const collection = 'users';

const STATUS_GAME = {
    'PLAYING': 'PLAYING',
    'WAIT_TURN': 'WAIT_TURN',
    'WAIT_GAME': 'WAIT_GAME'
};

module.exports.STATUS_GAME = STATUS_GAME;

module.exports.registerUser = payload => {

    return db.insertOne(collection, payload);
};

module.exports.getUserByUsername = username => {
    const query = {
        'username': username
    };

    return db.findOne(collection, query);
};

module.exports.setStatusConnection = (userId, status = true) => {
    const query = { '_id': db.ObjectId(userId) };
    const update = {
        '$set': {
            'statusConnection': status,
            'gameStatus': STATUS_GAME.WAIT_GAME
        }
    };

    return db.updateOne(collection, query, update);
};

module.exports.setGameStatus = (userId, status = STATUS_GAME.WAIT_GAME) => {
    const query = { '_id': db.ObjectId(userId) };
    const update = {
        '$set': {
            'gameStatus': status
        }
    };

    return db.updateOne(collection, query, update);
};

module.exports.getUsersByStatus = (status, userId) => {
    const query = {
        'statusConnection': true,
        'gameStatus': status
    };

    if (userId) query._id = { '$ne': db.ObjectId(userId) };

    return db.find(collection, query);
};
