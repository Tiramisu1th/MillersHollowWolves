function assign(playerList, msg) {
    var { shuffleArray } = require("../importFunctions")
    shuffleArray(playerList)
    msg.channel.send("Finished shuffling.")
    msg.channel.send("Numbers had been assigned to each player :\n")
    for (let index = 0; index < playerList.length; index++) {
        const element = playerList[index];
        msg.channel.send(`**${index + 1}.** __${element}__`)
    }
}

module.exports = assign