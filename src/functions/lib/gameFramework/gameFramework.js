async function gameFramework(client, message) {
    var { gameInfo } = require("../../../../index")
    var { readTextPermission , bulkAccessTextChannel , removeCharacter } = require("../../importFunctions")
    var playerGroups = gameInfo.playerRoles
    var channel = client.channels.get("599846751566037002")
    var protectedLastRound = []
    var killed = []
    console.log(playerGroups)
    while ((playerGroups.FortuneTeller.length !== 0 || playerGroups.Villager.length !== 0 || playerGroups.Hunter.length !== 0 || playerGroups.Guard.length !==0 || playerGroups.Idiot.length !==0 || playerGroups.NightWitch.length !==0 || playerGroups.Witch.length !==0 || playerGroups.Knight.length !==0) || (playerGroups.Wolf.length !== 0 || playerGroups.BlackWolf.length !==0 || playerGroups.WhiteWolf.length !==0)) {
        var toKilledByWolf = []
        var toProtect = []
        var toHeal = []
        var toKilledByWitch = []
        var toKilledByHunter = []
        console.log("Guard time")
        if (playerGroups.Guard.length !== 0) {
            await bulkAccessTextChannel(message, playerGroups, false)
            await readTextPermission(message, playerGroups.Guard, true)
            try {
                channel.send("Please choose someone to protect this night by using `=protect [player name]`.\n_**YOU MUST SPELL THE PLAYER'S USERNAME (NOT NICKNAME) CORRECTLY, case is insensitive.**-\ni.e. `=protect SomeOne`\n\n_**WARNING : THE PLAYER WILL STILL DIE IF YOU AND THE WITCH CHOSE TO SAVE THE SAME PLAYER.\nWARNING : PROTECTING THE SAME PLAYER AS LAST ROUND WILL NOT GRANT YOU ANOTHER CHOICE AND WILL COUNTED AS FORFEIT THE PROTECTION**_\n\nYou will have 1 minute to choose, after the timeout, you will not be able to type anything.")
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
                toProtect.push(args[0])
                var protectedLastRound = args[0]
            }
            channel.bulkDelete(5)
        }
        console.log("Wolf time")
        if (playerGroups.Wolf.length !== 0 || playerGroups.WhiteWolf.length !== 0 || playerGroups.BlackWolf.length !== 0) {
            await bulkAccessTextChannel(message, playerGroups, false)
            if (playerGroups.Wolf.length !== 0) await readTextPermission(message, playerGroups.Wolf, true)
            if (playerGroups.WhiteWolf.length !== 0) await readTextPermission(message, playerGroups.WhiteWolf, true)
            if (playerGroups.BlackWolf.length !== 0) await readTextPermission(message, playerGroups.BlackWolf, true)
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
            await bulkAccessTextChannel(message, playerGroups, false)
            await readTextPermission(message, playerGroups.Witch, true)
            try {
                channel.send("Please choose someone to heal or kill this night by using `=heal [player name]` or `=kill [player name]`.\n_**YOU MUST SPELL THE PLAYER'S USERNAME (NOT NICKNAME) CORRECTLY, case is insensitive.**-\ni.e. `=heal SomeOne` or `=kill SomeOne`\n\nYou will have 1 minute to choose, after the timeout, you will not be able to type anything.\n\n" + `The one got killed this night is ${toKilledByWolf}.`)
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
        console.log("FT time")
        if (playerGroups.FortuneTeller.length !== 0) {
            await bulkAccessTextChannel(message, playerGroups, false)
            await readTextPermission(message, playerGroups.FortuneTeller, true)
            try {
                channel.send("Please choose someone to inspect his role this night by using `=inspect [player name]`.\n_**YOU MUST SPELL THE PLAYER'S USERNAME (NOT NICKNAME) CORRECTLY, case is insensitive.**-\ni.e. `=inspect SomeOne`\n\nYou will have 1 minute to choose, after the timeout, you will not be able to type anything.")
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
            await bulkAccessTextChannel(message, playerGroups, false)
            await readTextPermission(message, playerGroups.Hunter, true)
            for (let i = 0; i < playerGroups.Hunter.length; i++) {
                const element = playerGroups.Hunter[i];
                if (element === toKilledByWolf) {
                    try {
                        channel.send("Please choose someone to revenge this night by using `=kill [player name]`.\n_**YOU MUST SPELL THE PLAYER'S USERNAME (NOT NICKNAME) CORRECTLY, case is insensitive.**-\ni.e. `=kill SomeOne`\n\nYou will have 1 minute to choose, after the timeout, you will not be able to type anything.")
                        var filter = m => m.content.startsWith("=kill ")
                        var response = await channel.awaitMessages(filter, {    
                            errors    : ['time'],
                            maxMatches: 1,
                            time      : 60000
                        });
                    } catch (error) {
                        for (let index = 0; index < playerGroups.FortuneTeller.length; index++) {
                            const element = playerGroups.FortuneTeller[index];
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
        await bulkAccessTextChannel(message, playerGroups, true)
        if (killed.length !== 0) { 
            channel.send(`The following players were killed this night :\n\n${killed.join("\n")}`)
        } else {
            channel.send("No one was killed tonight.")
        }
    }
    console.log("Game ended.")
}

module.exports = gameFramework