function readTextPermission(msg, userGroup /* Such as wolves, villagers, etc. */, allowReadChannel = true) {
    var { client } = require("../../../index")
    var channel = client.channels.get("599846751566037002")
    if (allowReadChannel === true) {    
        for (let index = 0; index < userGroup.length; index++) {
            const element = userGroup[index];
            if (element === null) return
            var player = client.users.find(user => user.username === element);
            var id = player.id
            channel.overwritePermissions(id, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                READ_MESSAGE_HISTORY: true,
                ATTACH_FILES: false
            },"Wolf game")
        }
    } else {
        for (let index = 0; index < userGroup.length; index++) {
            const element = userGroup[index];
            if (element === null) return
            var player = client.users.find(user => user.username === element);
            var id = player.id
            channel.overwritePermissions(id, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false,
                READ_MESSAGE_HISTORY: false,
                ATTACH_FILES: false
            }, "Wolf game")
        }
    }
}

module.exports = readTextPermission