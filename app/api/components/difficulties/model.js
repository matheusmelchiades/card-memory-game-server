const dao = require('./dao');

module.exports.getDifficulties = async () => {

    const difficultiesDb = await dao.getDifficulties();

    return difficultiesDb || {};
};
