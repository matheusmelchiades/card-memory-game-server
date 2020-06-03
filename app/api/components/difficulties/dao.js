/** @type {import('../../engine/dao/handlers/Mongo')} */

module.exports.getDifficulties = async () => {
    var lDifficulties = [{
            name: "Muito f�cil",
            time: 60,
            cards_length: 8
        },
        {
            name: "F�cil",
            time: 80,
            cards_length: 12
        },
        {
            name: "Normal",
            time: 120,
            cards_length: 16
        },
        {
            name: "Dif�cil",
            time: 140,
            cards_length: 24
        },
        {
            name: "Muito dif�cil",
            time: 150,
            cards_length: 30
        }
    ]

    return lDifficulties;
};