const handler = require('./controller');
const joi = require('@hapi/joi');

module.exports = [
    {
        'path': '/signup',
        'method': 'POST',
        'handler': handler.registerUser,
        'config': {
            'description': 'Get Default',
            'validate': {
                'payload': joi.object({
                    'username': joi.string().required(),
                    'password': joi.string().required()
                }),
                'failAction': (_, __, err) => err
            }
        }
    }
];