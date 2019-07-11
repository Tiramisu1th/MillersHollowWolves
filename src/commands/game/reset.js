const { Command } = require("../../core/exports")

class reset extends Command {
    constructor(client) {
        super(client, {
            name: "start",
            group: "game",
            memberName: "start",
            description: "Use this command to reset the player list for the next game of The Werewolves of the Miller's Hollow."
        })
    }

    run(message) {
        var { participantsList } = require("../../../index")
        participantsList.length = 0
        message.channel.send("The player list has been resetted.")
    }
}

module.exports = reset