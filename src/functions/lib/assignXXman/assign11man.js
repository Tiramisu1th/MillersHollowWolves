function assign11man(userList) {
    var trollPercent = Math.floor(Math.random() * 100) + 1
    if (trollPercent <= 5) {
        final_Output = "combination_Troll"
    } else {
        var randomizeList = ["combination_A", "combination_B"]
        var number = Math.floor(Math.random()*randomizeList.length)
        var final_Output = randomizeList[number]    
    }
    var functionList = {
        combination_A: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "A"
            gameInfo.playerNumber = "11"
            var pushing = []
            for (let i = 0; i < 5; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
            var pushing = []
            for (let i = 0; i < 3; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Wolf = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.FortuneTeller = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.NightWitch = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Guard = pushing
        },
        combination_B: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "A"
            gameInfo.playerNumber = "11"
            var pushing = []
            for (let i = 0; i < 4; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
            var pushing = []
            for (let i = 0; i < 4; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Wolf = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.FortuneTeller = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.NightWitch = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Guard = pushing
        },
        combination_Troll: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "Troll"
            gameInfo.playerNumber = "11"
            var pushing = []
            for (let i = 0; i < 11; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
        }
    }
    functionList[final_Output](userList)
}

module.exports = assign11man