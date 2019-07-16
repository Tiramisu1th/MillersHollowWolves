function trollGames(playerRoles) {
    var { shuffleArray } = require("../../importFunctions")
    shuffleArray(playerRoles)
    var killed = playerRoles.shift()
    return killed
}

module.exports = trollGames