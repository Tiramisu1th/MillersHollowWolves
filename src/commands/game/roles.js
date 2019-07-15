const { Command } = require("../../core/exports")

class reset extends Command {
    constructor(client) {
        super(client, {
            name: "role",
            group: "game",
            memberName: "role",
            description: "Use this command to reset the player list for the next game of The Werewolves of the Miller's Hollow."
        })
    }

    run(message) {
        var { gameInfo } = require("../../../index")
        console.log(gameInfo)
    }
}

module.exports = reset