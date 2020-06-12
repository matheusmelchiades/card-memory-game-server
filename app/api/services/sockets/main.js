const logger = require('../../../../engine/logger');
const daoUsers = require('../../components/user/dao');
const daoMoves = require('../../components/moves/dao');
const daoDifficulties = require('../../components/difficulties/dao');
const daoGame = require('../../components/game/dao');
const randomHelper = require('../../../../helper/random');

let movesCache = {};

module.exports.test = ({ socket }) => {

    try {

        socket.emit('receiveTest', {
            'response': 'ROLA'
        });

    } catch (err) {
        logger.error(err.message);

        return err;
    }
};

module.exports.userOnline = async ({ payload }) => {

    try {
        const { user } = payload;

        await daoUsers.setStatusConnection(user._id);

    } catch (err) {
        logger.error(err.message);

        return err;
    }
};

module.exports.userOffline = async ({ payload }) => {

    try {
        const { user } = payload;

        await daoUsers.setStatusConnection(user._id, false);

    } catch (err) {
        logger.error(err.message);

        return err;
    }
};

module.exports.startGame = async ({ socket, payload }) => {

    try {
        const { difficulty, user } = payload;

        const usersInWait = await daoUsers.getUsersByStatus(daoUsers.STATUS_GAME.WAIT_GAME, user._id);
        const userChoice = randomHelper.array(usersInWait);
        const currentDiff = daoDifficulties.getDifficultyById(difficulty._id);

        const game = {
            'difficulty': currentDiff,
            'users': [user, userChoice],
            'cards': []
        };

        await daoGame.insert(game);

        game.users.forEach(u => {
            socket.emit(`${u._id}/startedGame`, game);
        });

    } catch (err) {
        logger.error(err.message);

        return err;
    }
};

module.exports.receiveMove = async ({ payload, socket }) => {

    try {

        const { game, user, card } = payload;
        const move = {
            'time': new Date().toISOString(),
            'game_id': game._id,
            'card_id': card._id,
            'user_id': user._id
        };

        await daoMoves.insertMove(move);

        if (!movesCache[game._id]) movesCache[game._id] = [];

        const nextUser = movesCache[game._id].filter(m => {
            return m.user_id === user._id;
        });

        if (nextUser.length >= 2) {

            // PROMIXO JOGADOR
            if (move.user_id === user._id) {

                socket.emit('stopMoves/${}');

            } else {
                movesCache = [move];
            }
        } else {
            movesCache.push(move);
        }

        console.log(movesCache);

    } catch (err) {
        logger.error(err);

        return err;
    }
};
