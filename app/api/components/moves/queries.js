/** @type {import('../../engine/dao/handlers/Mongo')} */
const { ObjectId } = global.databases[process.env.MONGO_GLOBAL_NAME];

module.exports.buildDocument = payload => {
    const document = {};

    for (const key of Object.keys(payload)) {

        switch (key) {
            case 'time':
                document[key] = payload[key];
                break;
            case 'game_id':
                document[key] = ObjectId(payload[key]);
                break;
            case 'card_id':
                document[key] = ObjectId(payload[key]);
                break;
            case 'user_id':
                document[key] = ObjectId(payload[key]);
                break;

            default: break;
        }
    }

    return document;
};
