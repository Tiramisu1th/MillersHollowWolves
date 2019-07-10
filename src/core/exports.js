const { Discord , Command , CommandoClient } = require("./requires")
const { Token , ownerID , ownerID2 } = require("../settings/importSettings")
const { assignRole , shuffleArray } = require("../functions/importFunctions")
const { client } = require("./core")

module.exports = { assignRole , shuffleArray , Discord , Command , CommandoClient , Token , ownerID , ownerID2 , client }