const { Command } = require("../../core/exports")

class signUp extends Command {
    constructor(client) {
        super(client, {
            name: "signed",
            group: "game",
            memberName: "signed",
            description: "Use this command to see who is in the next game of The Werewolves of the Miller's Hollow."
        })
    }

    run(message) {
        var { participantsNameList } = require("../../../index")
        if (participantsNameList.length === 0) return message.channel.send("No one has signed up so far.")
        message.channel.send("Participants for the next game of The Werewolves of the Miller's Hollow :\n" + participantsNameList.join("\n"))
    }
}

module.exports = signUp