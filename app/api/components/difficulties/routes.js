const handler = require('./controller');

module.exports = [
    {
        'path': '/difficulties',
        'method': 'GET',
        'handler': handler.getDifficulties,
        'config': {
            'description': 'Get Default'
        }
    }
];