const { Command } = require("../../core/exports")

class signUp extends Command {
    constructor(client) {
        super(client, {
            name: "sign-up",
            group: "game",
            memberName: "sign",
            description: "Use this command to sign up to the next game of The Werewolves of the Miller's Hollow."
        })
    }

    run(message) {
        var { participantsList, participantsNameList } = require("../../../index")
        var newParticipant = message.author
        if (participantsList.includes(newParticipant)) return message.reply("You have already signed up !")
        participantsList.push(newParticipant)
        for (let i = 0; i < participantsList.length; i++) {
            const element = participantsList[i].username;
            participantsNameList.push(element)
        }
        console.log(participantsList)
        message.channel.send("You are now in the list of the participants for the next game of The Werewolves of the Miller's Hollow.\n\nCurrent player(s) :\n" + participantsNameList.join("\n"))
    }
}

module.exports = signUp