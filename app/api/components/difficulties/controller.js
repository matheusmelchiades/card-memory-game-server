const model = require('./model');
const boom = require('boom');
const logger = require('../../../../engine/logger');

module.exports.getDifficulties = async (request, h) => {

    try {
        const response = await model.getDifficulties();

        return h.response(response);
    } catch (err) {
        logger.error(err.message);

        return boom.internal();
    }
};