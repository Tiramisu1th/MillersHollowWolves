function readTextPermission(userGroup, allowReadChannel = true, allowSendMessage = true) {
    var { client } = require("../../../index")
    var channel = client.channels.get("599846751566037002")
    if (allowReadChannel === true) {    
        for (let index = 0; index < userGroup.length; index++) {
            const element = userGroup[index];
            if (element === null) return
            var player = client.users.find(user => user.username === element);
            var id = player.id
            channel.overwritePermissions(id, {
                VIEW_CHANNEL: allowReadChannel,
                SEND_MESSAGES: allowSendMessage,
                READ_MESSAGE_HISTORY: allowReadChannel,
                ATTACH_FILES: false
            },"Wolf game")
        }
    }
}

module.exports = readTextPermission