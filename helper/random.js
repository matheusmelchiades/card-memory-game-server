
module.exports.array = (list = []) => {
    const indexRand = Math.floor(Math.random() * list.length);

    return list[indexRand];
};
