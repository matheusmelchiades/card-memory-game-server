
module.exports.buildDocument = payload => {
    const document = {};

    for (const key of Object.keys(payload)) {

        switch (key) {
            case 'difficulty':
                document[key] = payload[key];
                break;
            case 'cards':
                document[key] = payload[key];
                break;
            case 'users':
                document[key] = payload[key];
                break;

            default: break;
        }
    }

    return document;
};
