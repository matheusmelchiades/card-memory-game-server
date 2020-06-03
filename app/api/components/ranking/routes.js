const handler = require('./controller');
const joi = require('@hapi/joi');

module.exports = [
    {
        'path': '/ranking',
        'method': 'POST',
        'handler': handler.insertUserInRanking,
        'config': {
            'description': 'Get Default',
            'validate': {
                'payload': joi.object({
                    'username': joi.string().required(),
                    'pointing': joi.number().required()
                }),
                'failAction': (_, __, err) => err
            }
        }
    },
    {
        'path': '/ranking',
        'method': 'GET',
        'handler': handler.getRankingTop50,
        'config': {
            'description': 'Get Default'
        }
    }
];