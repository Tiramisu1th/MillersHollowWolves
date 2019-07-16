function assignNumber(playerList, msg) {
    var { shuffleArray } = require("../importFunctions")
    var shuffled = shuffleArray(playerList)
    msg.channel.send("Finished shuffling.")
    return shuffled
}

module.exports = assignNumber