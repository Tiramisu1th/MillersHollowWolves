const { Command } = require("../../core/exports")

class reset extends Command {
    constructor(client) {
        super(client, {
            name: "reset",
            group: "game",
            memberName: "reset",
            description: "Use this command to reset the player list for the next game of The Werewolves of the Miller's Hollow."
        })
    }

    run(message) {
        var { participantsList , participantsNameList , gameInfo } = require("../../../index")
        participantsList.length = 0
        participantsNameList.length = 0
        gameInfo.playerNumber = []
        gameInfo.combination = []
        gameInfo.playerRoles = {
            Villager: [],
            Werewolves: [],
            WhiteWolf: [],
            BlackWolf: [],
            Hunter: [],
            FortuneTeller: [],
            Guard: [],
            Witch: [],
            NightWitch: [],
            Knight: [],
            Idiot: []
        }
        message.channel.send("The player list has been resetted.")
    }
}

module.exports = reset