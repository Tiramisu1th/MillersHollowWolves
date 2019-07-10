const { Command } = require("../../core/exports")

class start extends Command {
    constructor(client) {
        super(client, {
            name: "start",
            group: "game",
            memberName: "start",
            description: "Use this command to start the game of The Werewolves of the Miller's Hollow."
        })
    }

    run(message) {
        var { participantsList } = require("../../../index")
        const { assignRole } = require("../../core/exports")
        if(participantsList.length < 2) return message.channel.send("You don't have enough players to play.")
        assignRole(participantsList, message)
        participantsList.length = 0
    }
}

module.exports = start