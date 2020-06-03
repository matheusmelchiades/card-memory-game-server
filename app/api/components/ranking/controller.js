const model = require('./model');
const boom = require('boom');
const logger = require('../../../../engine/logger');

module.exports.insertUserInRanking = async (request, h) => {

    try {
        const { payload } = request;

        const response = await model.insertUserInRanking(payload);

        return h.response(response);
    } catch (err) {
        logger.error(err.message);

        return boom.internal();
    }
};

module.exports.getRankingTop50 = async (request, h) => {

    try {
        const response = await model.getRankingTop50();

        return h.response(response);
    } catch (err) {
        logger.error(err.message);

        return boom.internal();
    }
};