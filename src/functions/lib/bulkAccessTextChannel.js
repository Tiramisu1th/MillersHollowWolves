function bulkAccessTextChannel(userGroups, allowReadChannel = false, allowSendMessage = false) {
    var { readTextPermission } = require("../importFunctions")
    var entry = userGroups;
    if (allowReadChannel === false) {
        for(var key in entry) {
            var value = entry[key];
            readTextPermission(value, false)
        }
    } else if (allowReadChannel === true) {
        if (allowSendMessage === true) {
            for(var key in entry) {
                var value = entry[key];
                readTextPermission(value, false, true)
            }
        } else {
            for(var key in entry) {
                var value = entry[key];
                readTextPermission(value, true, true)
            }
        }
    }
}

module.exports = bulkAccessTextChannel