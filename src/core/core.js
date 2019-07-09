const { CommandoClient } = require("./requires")
const { ownerID, ownerID2 } = require("../settings/importSettings")

const client = new CommandoClient({
    commandPrefix: "//",
    disableEveryone: true,
    owner: [ ownerID, ownerID2 ]
})

module.exports = { client }