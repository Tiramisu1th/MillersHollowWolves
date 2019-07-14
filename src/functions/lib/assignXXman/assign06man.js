function assign06man(userList) {
    var randomizeList = ["combination_A" , "combination_B", "combination_C", "combination_D", "combination_Troll"]
    var number = Math.floor(Math.random()*randomizeList.length)
    var final_Output = randomizeList[number]
    if (final_Output === "combination_Troll") {
        var randomizeList = ["combination_A" , "combination_B", "combination_C", "combination_D", "combination_Troll"]
        var number = Math.floor(Math.random()*randomizeList.length)
        var final_Output = randomizeList[number]
    }
    var functionList = {
        combination_A: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "A"
            gameInfo.playerNumber = 6
            var pushing = []
            for (let i = 0; i < 2; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
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
            gameInfo.playerRoles.Guard = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.FortuneTeller = pushing
        },
        combination_B: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "B"
            gameInfo.playerNumber = 6
            var pushing = []
            for (let i = 0; i < 2; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
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
            gameInfo.playerRoles.Hunter = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.FortuneTeller = pushing
        },
        combination_C: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "C"
            gameInfo.playerNumber = 6
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Wolf = pushing
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
            gameInfo.playerRoles.NightWitch = pushing
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
            gameInfo.playerRoles.FortuneTeller = pushing
        },
        combination_D: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "D"
            gameInfo.playerNumber = '6'
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
            var pushing = []
            for (let i = 0; i < 1; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Wolf = pushing
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
            gameInfo.playerRoles.Witch = pushing
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
            gameInfo.playerRoles.FortuneTeller = pushing
        },
        combination_Troll: function(userList) {
            var { gameInfo } = require("../../../../index")
            gameInfo.combination = "Troll"
            gameInfo.playerNumber = '6'
            var pushing = []
            for (let i = 0; i < 6; i++) {
                var affectedPlayer = userList.shift()
                pushing.push(affectedPlayer)
            }
            gameInfo.playerRoles.Villager = pushing
        }
    }
    functionList[`${final_Output}`](userList)
}

module.exports = assign06man