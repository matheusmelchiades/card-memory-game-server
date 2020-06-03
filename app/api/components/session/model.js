const dao = require('./dao');

module.exports.registerUser = async user => {

    user.victories = 0;
    user.losses = 0;
    user.perfil = 'J';

    var userDb = await dao.getUserByUsername(user.username);

    if (userDb) {
        if (userDb.password === user.password) {
            return userDb;
        } else {
            return { 'message': 'Usuário e/ou senha incorretos.' }
        };
    }

    userDb = await dao.registerUser(user);

    return userDb;
};