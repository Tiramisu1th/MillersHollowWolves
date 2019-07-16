async function gameFramework(client, message) {
    var { gameInfo } = require("../../../../index")
    var { readTextPermission , bulkAccessTextChannel , removeCharacter } = require("../../importFunctions")
    var playerGroups = gameInfo.playerRoles
    var allPlayersIncludeDead = playerGroups
    var channel = client.channels.get("599846751566037002")
    var protectedLastRound = []
    var killed = []
    var witchHeal = true
    var witchKill = true
    console.log(playerGroups)
    while (((playerGroups.FortuneTeller.length + playerGroups.Villager.length + playerGroups.Hunter.length + playerGroups.Guard.length + playerGroups.Idiot.length + playerGroups.NightWitch.length + playerGroups.Witch.length + playerGroups.Knight.length > 1) && (playerGroups.Wolf.length + playerGroups.BlackWolf.length + playerGroups.WhiteWolf.length > 0))) {
        var toKilledByWolf = []
        var toProtect = []
        var toHeal = []
        var toKilledByWitch = []
        var toKilledByHunter = []
        //Night time
        console.log("It is night now.")
        console.log("Guard time")
        if (playerGroups.Guard.length !== 0) {
            await bulkAccessTextChannel(playerGroups, false)
            await readTextPermission(playerGroups.Guard, true)
            for (let index = 0; index < playerGroups.Guard.length; index++) {
                const element = playerGroups.Guard[index];
                var player = client.users.find(user => user.username === element)
                player.send("It is you turn, please go to <#599846751566037002> and follow the instructions. You have one minute time.")
            }
            try {
                channel.send("Please choose someone to protect this night by using `=protect [player name]`.\n_**YOU MUST SPELL THE PLAYER'S USERNAME (NOT NICKNAME) CORRECTLY, case is insensitive.**-\ni.e. `=protect SomeOne`\n\n_**WARNING : THE PLAYER WILL STILL DIE IF YOU AND THE WITCH CHOSE TO SAVE THE SAME PLAYER.\nWARNING : PROTECTING THE SAME PLAYER AS LAST ROUND WILL NOT GRANT YOU ANOTHER CHOICE AND WILL FORFEIT YOUR PROTECTION**_\n\nYou will have 1 minute to choose, after the timeout, you will not be able to type anything.")
                var filter = m => m.content.startsWith("=protect ")
                var response = await channel.awaitMessages(filter, {
                    errors    : ['time'],
                    maxMatches: 1,
                    time      : 60000
                });
            } catch (error) {
                for (let index = 0; index < playerGroups.Guard.length; index++) {
                    const element = playerGroups.Guard[index];
                    var player = client.users.find(user => user.username === element)
                    player.send("You didn't respond in 1 minute.")
                }
            }
            if (typeof response === "string") {
                removeCharacter(response, "=protect ")
                var args = response.trim().split(/ +/g);
                if (args[0] === protectedLastRound) {
                    var player = client.users.find(user => user.username === element)
                    player.send("You chose to protect the same player last round, resulting ed the protection.")
                } else {
                    toProtect.push(args[0])
                }
                var protectedLastRound = args[0]
            }
            channel.bulkDelete(5)
        }

        console.log("Wolf time")
        if (playerGroups.Wolf.length + playerGroups.WhiteWolf.length + playerGroups.BlackWolf.length !== 0) {
            await bulkAccessTextChannel(playerGroups, false)
            if (playerGroups.Wolf.length !== 0) await readTextPermission(playerGroups.Wolf, true)
            if (playerGroups.WhiteWolf.length !== 0) await readTextPermission(playerGroups.WhiteWolf, true)
            if (playerGroups.BlackWolf.length !== 0) await readTextPermission(playerGroups.BlackWolf, true)
            for (let index = 0; index < playerGroups.Wolf.length; index++) {
                const element = playerGroups.Wolf[index];
                var player = client.users.find(user => user.username === element)
                player.send("It is you turn, please go to <#599846751566037002> and follow the instructions. You have one minute time.")
            }
            for (let index = 0; index < playerGroups.WhiteWolf.length; index++) {
                const element = playerGroups.WhiteWolf[index];
                var player = client.users.find(user => user.username === element)
                player.send("It is you turn, please go to <#599846751566037002> and follow the instructions. You have one minute time.")
            }
            for (let index = 0; index < playerGroups.BlackWolf.length; index++) {
                const element = playerGroups.BlackWolf[index];
                var player = client.users.find(user => user.username === element)
                player.send("It is you turn, please go to <#599846751566037002> and follow the instructions. You have one minute time.")
            }
            try {
                channel.send("Please choose someone to kill this night by using `=kill [player name]`.\n_**YOU MUST SPELL THE PLAYER'S USERNAME (NOT NICKNAME) CORRECTLY, case is insensitive.**-\ni.e. `=kill SomeOne`\n\n_**ADVICE : DO DISCUSS WITH YOU TEAMMATES (if you have some) BEFORE SOMEONE CAST YOUR VOTE TO KILL SOMEONE.**_\n\nYou will have 1 minute to choose, after the timeout, you will not be able to type anything.")
                var filter = m => m.content.startsWith("=kill ")
                var response = await channel.awaitMessages(filter, {
                    errors    : ['time'],
                    maxMatches: 1,
                    time      : 60000
                });
            } catch (error) {
                for (let index = 0; index < playerGroups.Wolf.length; index++) {
                    const element = playerGroups.Wolf[index];
                    var player = client.users.find(user => user.username === element)
                    player.send("You didn't respond in 1 minute.")
                }
                for (let index = 0; index < playerGroups.WhiteWolf.length; index++) {
                    const element = playerGroups.WhiteWolf[index];
                    var player = client.users.find(user => user.username === element)
                    player.send("You didn't respond in 1 minute.")
                }
                for (let index = 0; index < playerGroups.BlackWolf.length; index++) {
                    const element = playerGroups.BlackWolf[index];
                    var player = client.users.find(user => user.username === element)
                    player.send("You didn't respond in 1 minute.")
                }
            }
            if (typeof response === "string") {
                removeCharacter(response, "=kill ")
                var args = response.trim().split(/ +/g);
                toKilledByWolf.push(args[0])
            }
            channel.bulkDelete(5)
        }

        console.log("Witch time")
        if (playerGroups.Witch.length !== 0) {
            await bulkAccessTextChannel(playerGroups, false)
            await readTextPermission(playerGroups.Witch, true)
            for (let index = 0; index < playerGroups.Witch.length; index++) {
                const element = playerGroups.Witch[index];
                var player = client.users.find(user => user.username === element)
                player.send("It is you turn, please go to <#599846751566037002> and follow the instructions. You have one minute time.")
            }
            try {
                channel.send("Please choose someone to heal or kill this night by using `=heal [player name]` or `=kill [player name]`.\n_**YOU MUST SPELL THE PLAYER'S USERNAME (NOT NICKNAME) CORRECTLY, case is insensitive.\nYOU CANNOT REUSE YOUR HEAL OR KILL OR ELSE YOUR ABILITY WILL BE COUNTED AS FORFEIT.**_\ni.e. `=heal SomeOne` or `=kill SomeOne`\n\nYou will have 1 minute to choose, after the timeout, you will not be able to type anything.\n\n" + `The one got killed this night is ${toKilledByWolf}.`)
                var filter = m => (m.content.startsWith("=heal ") || m.content.startsWith("=kill "))
                var response = await channel.awaitMessages(filter, {
                    errors    : ['time'],
                    maxMatches: 1,
                    time      : 60000
                });
            } catch (error) {
                for (let index = 0; index < playerGroups.Witch.length; index++) {
                    const element = playerGroups.Witch[index];
                    var player = client.users.find(user => user.username === element)
                    player.send("You didn't respond in 1 minute.")
                }
            }
            if (response.content.startsWith("=heal ") && typeof response === "string") {
                removeCharacter(response, "=heal ")
                var args = response.trim().split(/ +/g);
                toHeal.push(args[0])
            }
            if (response.content.startsWith("=kill ") && typeof response === "string") {
                removeCharacter(response, "=kill ")
                var args = response.trim().split(/ +/g);
                toKilledByWitch.push(args[0])
            }
            channel.bulkDelete(5)
        }

        console.log("NightWitch time")
        if (playerGroups.Witch.length !== 0) {
            await bulkAccessTextChannel(playerGroups, false)
            await readTextPermission(playerGroups.NightWitch, true)
            for (let index = 0; index < playerGroups.NightWitch.length; index++) {
                const element = playerGroups.NightWitch[index];
                var player = client.users.find(user => user.username === element)
                player.send("It is you turn, please go to <#599846751566037002> and follow the instructions. You have one minute time.")
            }
            try {
                channel.send("Please choose someone to heal or kill this night by using `=heal [player name]` or `=kill [player name]`.\n_**YOU MUST SPELL THE PLAYER'S USERNAME (NOT NICKNAME) CORRECTLY, case is insensitive.\nYOU CANNOT REUSE YOUR HEAL OR KILL OR ELSE YOUR ABILITY WILL BE COUNTED AS FORFEIT\nYOU CANNOT HEAL YOUSELF OR ELSE YOUR HEAL WILL BE COUNTED A FORFEIT.**-\ni.e. `=heal SomeOne` or `=kill SomeOne`\n\nYou will have 1 minute to choose, after the timeout, you will not be able to type anything.\n\n" + `The one got killed this night is ${toKilledByWolf}.`)
                var filter = m => (m.content.startsWith("=heal ") || m.content.startsWith("=kill "))
                var response = await channel.awaitMessages(filter, {
                    errors    : ['time'],
                    maxMatches: 1,
                    time      : 60000
                });
            } catch (error) {
                for (let index = 0; index < playerGroups.NightWitch.length; index++) {
                    const element = playerGroups.NightWitch[index];
                    var player = client.users.find(user => user.username === element)
                    player.send("You didn't respond in 1 minute.")
                }
            }
            if (response.content.startsWith("=heal ") && typeof response === "string") {
                removeCharacter(response, "=heal ")
                var args = response.trim().split(/ +/g);
                toHeal.push(args[0])
            }
            if (response.content.startsWith("=kill ") && typeof response === "string") {
                removeCharacter(response, "=kill ")
                var args = response.trim().split(/ +/g);
                toKilledByWitch.push(args[0])
            }
            channel.bulkDelete(5)
        }

        console.log("FT time")
        if (playerGroups.FortuneTeller.length !== 0) {
            await bulkAccessTextChannel(playerGroups, false)
            await readTextPermission(playerGroups.FortuneTeller, true)
            for (let index = 0; index < playerGroups.FortuneTeller.length; index++) {
                const element = playerGroups.Witch[index];
                var player = client.users.find(user => user.username === element)
                player.send("It is you turn, please go to <#599846751566037002> and follow the instructions. You have one minute time.")
            }
            try {
                channel.send("Please choose someone to inspect his role this night by using `=inspect [player name]`.\n_**YOU MUST SPELL THE PLAYER'S USERNAME (NOT NICKNAME) CORRECTLY, case is insensitive.**_\n_**ADVICE : PLEASE DO NOT RE-INSPECT THE SAME PLAYER FOR THE SECOND TIME AS THIS WILL WASTE YOUR ABILITY THIS TIME**_\ni.e. `=inspect SomeOne`\n\nYou will have 1 minute to choose, after the timeout, you will not be able to type anything.")
                var filter = m => m.content.startsWith("=inspect ")
                var response = await channel.awaitMessages(filter, {
                    errors    : ['time'],
                    maxMatches: 1,
                    time      : 60000
                });
            } catch (error) {
                for (let index = 0; index < playerGroups.FortuneTeller.length; index++) {
                    const element = playerGroups.FortuneTeller[index];
                    var player = client.users.find(user => user.username === element)
                    player.send("You didn't respond in 1 minute.")
                }
            }
            if (typeof response === "string") {
                removeCharacter(response, "=inspect ")
                var args = response.trim().split(/ +/g);
                for(var key in playerGroups) {
                    if(playerGroups[key] === args[0]) {
                        var playerRole = playerGroups[key]
                        if (playerRole !== "Wolf" || playerRole !== "WhiteWolf" || playerRole !== "BlackWolf") {
                            var inspectResults = "This player is a Werewolf."
                        } else {
                            var inspectResults = "This player is not a Werewolf."
                        }
                        for (let index = 0; index < playerGroups.FortuneTeller.length; index++) {
                            const element = playerGroups.FortuneTeller[index];
                            var player = client.users.find(user => user.username === element)
                            player.send(inspectResults)
                        }
                    }
                }
                channel.bulkDelete(5)
            }    
        }

        console.log("Hunter time")
        if (playerGroups.Hunter.length !== 0) {
            await bulkAccessTextChannel(playerGroups, false)
            await readTextPermission(playerGroups.Hunter, true)
            for (let index = 0; index < playerGroups.Hunter.length; index++) {
                const element = playerGroups.Hunter[index];
                var player = client.users.find(user => user.username === element)
                player.send("It is you turn, please go to <#599846751566037002> and follow the instructions. You have one minute time.")
            }
            for (let i = 0; i < playerGroups.Hunter.length; i++) {
                const element = playerGroups.Hunter[i];
                if (element === toKilledByWolf) {
                    try {
                        channel.send("Please choose someone to revenge this night by using `=kill [player name]`.\n_**YOU MUST SPELL THE PLAYER'S USERNAME (NOT NICKNAME) CORRECTLY, case is insensitive.\nYOU CAN TYPE YOU NAME UP BUT NO EFFECT WILL BE DONE.**-\ni.e. `=kill SomeOne`\n\nYou will have 1 minute to choose, after the timeout, you will not be able to type anything.")
                        var filter = m => m.content.startsWith("=kill ")
                        var response = await channel.awaitMessages(filter, {    
                            errors    : ['time'],
                            maxMatches: 1,
                            time      : 60000
                        });
                    } catch (error) {
                        for (let index = 0; index < playerGroups.Hunter.length; index++) {
                            const element = playerGroups.Hunter[index];
                            var player = client.users.find(user => user.username === element)
                            player.send("You didn't respond in 1 minute. You forfeited your hunter ability.")
                        }
                    }
                    if (typeof response === "string") {
                        removeCharacter(response, "=kill ")
                        var args = response.trim().split(/ +/g);
                        toKilledByHunter.push(args[0])
                    }
                } else {
                    for (let index = 0; index < playerGroups.Hunter.length; index++) {
                        const element = playerGroups.Hunter[index];
                        var player = client.users.find(user => user.username === element)
                        player.send("You are not being harmed by wolves this night.")
                    }
                }
                channel.bulkDelete(5)
            }
        }
        //Counting who died last night
        console.log("Calculating who died last night...")
        await bulkAccessTextChannel(playerGroups, true, false)
        if (toHeal === toProtect && toHeal === toKilledByWolf) {
            killed.push(toHeal)
        }
        if (toKilledByWolf.length !==0 && (toKilledByWolf !== toProtect || toKilledByWolf !== toHeal)) {
            killed.push(toKilledByWolf)
        } else if (toKilledByWitch.length !==0) {
            killed.push(toKilledByWitch)
        }
        if (toKilledByWitch.length !== 0) {
            killed.push(toKilledByWitch)
        }
        if (toKilledByHunter.length !==0) {
            killed.push(toKilledByHunter)
        }
        for (const key in playerGroups) {
            var element = playerGroups[key];
            for (var index = element.length - 1; index--;) {
                for (let i = 0; i < killed.length; i++) {
                    var remove = killed[i];
                    if (element[index] === remove) element.splice(index, 1);
                }
            }
        }
        await bulkAccessTextChannel(playerGroups, true, true)
        console.log("It is day now")
        if (killed.length !== 0) { 
            channel.send(`The following players were killed this night :\n\n${killed.join("\n")}`)
        } else {
            channel.send("No one was killed tonight.")
        }

    }

    if ((playerGroups.FortuneTeller.length + playerGroups.Villager.length + playerGroups.Hunter.length + playerGroups.Guard.length + playerGroups.Idiot.length + playerGroups.NightWitch.length + playerGroups.Witch.length + playerGroups.Knight.length !==0)) {
        channel.send("Citizens won the game.")
        for (const key in allPlayersIncludeDead) {
            const element = object[key];
            if (element === "Wolf") return
            if (element === "BlackWolf") return
            if (element === "WhiteWolf") return
            var winners = []
            winners.push(element)
        }
        channel.send("The winners are as follows :\n\n" + element.join("\n"))
    } else if (playerGroups.Wolf.length + playerGroups.BlackWolf.length + playerGroups.WhiteWolf.length !==0) {
        channel.send("Werewolves won the game")
        for (const key in allPlayersIncludeDead) {
            const element = object[key];
            if (element !== "Wolf") return
            if (element !== "BlackWolf") return
            if (element !== "WhiteWolf") return
            var winners = []
            winners.push(element)
        }
        channel.send("The winners are as follows :\n\n" + element.join("\n"))
    }

    await bulkAccessTextChannel(allPlayersIncludeDead, false)
    console.log("Game ended.")
}

module.exports = gameFramework