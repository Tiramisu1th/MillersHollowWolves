function bulkAccessTextChannel(msg, userGroups, allow = false) {
    var { readTextPermission } = require("../importFunctions")
    var entry = userGroups;
    if (allow === false) {
        for(var key in entry) {
            var value = entry[key];
            readTextPermission(msg, value, false)
        }
    } else if (allow === true) {
        for(var key in entry) {
            var value = entry[key];
            readTextPermission(msg, value, true)
        }
    }
}

module.exports = bulkAccessTextChannel