const dao = require('./dao');

module.exports.insertUserInRanking = async user => {

    console.log(user.username);

    var userDb = await dao.getUserInRanking(user.username);

    if (userDb) {
        user.pointing += userDb.pointing;

        userDb = await dao.updateUserInRanking({ 'username': user.username, user });

        return userDb;
    }

    userDb = await dao.insertUserInRanking(user);

    return userDb;
};

module.exports.getRankingTop50 = async () => {

    const rankingDb = await dao.getRankingTop50();

    return rankingDb || {};;
};