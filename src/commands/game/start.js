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

    async run(message) {
        var { client, participantsList , participantsNameList } = require("../../../index")
        const { assignNumber , assign06man , assign07man , assign08man , assign09man , assign10man , assign11man , assign12man } = require("../../functions/importFunctions")
        const { gameFramework , informRoles , trollGameFramework } = require("../../functions/importFunctions")
        if(participantsNameList.length < 6) return message.channel.send("You don't have enough players to play.")
        if(participantsNameList.length > 12) throw new TypeError('How the hell did you got so many people ?')
        var shuffled = assignNumber(participantsNameList, message)
        if (shuffled.length === 6) await assign06man(shuffled)
        if (shuffled.length === 7) await assign07man(shuffled)
        if (shuffled.length === 8) await assign08man(shuffled)
        if (shuffled.length === 9) await assign09man(shuffled)
        if (shuffled.length === 10) await assign10man(shuffled)
        if (shuffled.length === 11) await assign11man(shuffled)
        if (shuffled.length === 12) await assign12man(shuffled)
        message.channel.send("Roles have been assigned to all players.")
        informRoles(client)
        if (gameInfo.combination === "Troll") {
            await trollGameFramework()
        } else {
            await gameFramework(client, message)
        }
        participantsList.length = 0
        participantsNameList.length = 0
    }
}

module.exports = start