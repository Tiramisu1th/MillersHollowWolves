const path = require("path")
const { Token , client } = require("./src/core/exports")
var participantsList = []
var participantsNameList = []

client.registry
    .registerDefaultTypes()
    .registerGroups([["game", "game"]])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'src/commands'))

client.on("ready", () => {
    console.log("This thing is up and ready !")
    client.user.setActivity("Cookiezo getting 2k pp play if logged in", { type: 'WATCHING' })
})

client.on('error', console.error)

client.login(Token)

module.exports = { participantsList, participantsNameList }
