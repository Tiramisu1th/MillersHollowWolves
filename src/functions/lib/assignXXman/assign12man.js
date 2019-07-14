function assign12man(userList) {
    var trollPercent = Math.floor(Math.random() * 100) + 1
    if (trollPercent <= 5) {
        final_Output = "combination_Troll"
    } else {
        var randomizeList = ["combination_A", "combination_B", "combination_C", "combination_D"]
        var number = Math.floor(Math.random()*randomizeList.length)
        var final_Output = randomizeList[number]
    }
    var functionList = {
        combination_A: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "A"
            gameInfo.playerNumber = "12"
            var pushing = []
            for (let i = 0; i < 4; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
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
            gameInfo.playerRoles.Witch = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Hunter = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Idiot = pushing
            var pushing = []
            for (let i = 0; i < 4; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Wolf = pushing
        },
        combination_B: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "A"
            gameInfo.playerNumber = "12"
            var pushing = []
            for (let i = 0; i < 4; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
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
            gameInfo.playerRoles.Hunter = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Guard = pushing
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
            gameInfo.playerRoles.WhiteWolf = pushing
        },
        combination_C: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "A"
            gameInfo.playerNumber = "12"
            var pushing = []
            for (let i = 0; i < 3; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
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
            gameInfo.playerRoles.Hunter = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Guard = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Idiot = pushing
            var pushing = []
            for (let i = 0; i < 2; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Wolf = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.WhiteWolf = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.BlackWolf = pushing
        },
        combination_D: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "A"
            gameInfo.playerNumber = "12"
            var pushing = []
            for (let i = 0; i < 4; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
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
            gameInfo.playerRoles.Knight = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Guard = pushing
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
            gameInfo.playerRoles.WhiteWolf = pushing
        },
        combination_Troll: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "Troll"
            gameInfo.playerNumber = "12"
            var pushing = []
            for (let i = 0; i < 12; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
        }
    }
    functionList[final_Output](userList)
}

module.exports = assign12man