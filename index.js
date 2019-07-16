const path = require("path")
const { Token , client } = require("./src/core/exports")
var participantsList = []
var participantsNameList = []
var gameInfo = {
    playerNumber: [],
    combination: [],
    playerRoles: {
        Villager: [],
        Wolf: [],
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
}
client.registry
    .registerDefaultTypes()
    .registerGroups([["game", "game"]])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'src/commands'))

client.on("ready", () => {
    console.log("This thing is up and ready !")
    client.user.setActivity("me online", { type: 'WATCHING' })
})

client.on('error', console.error)

client.login(Token)

module.exports = { client, participantsList, participantsNameList, gameInfo }