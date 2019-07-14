function informRoles(client) {
    var { gameInfo } = require("../../../index")
    var entry = gameInfo.playerRoles

    for (let i = 0; i < entry.Villager.length; i++) {
        const element = entry.Villager[i];
        var player = client.users.find(user => user.username === element)
        player.send("Yeet you are a __Villager__, got nothing to do at night except waiting to be killed.")    
    }

    for (let i = 0; i < entry.Wolf.length; i++) {
        const element = entry.Wolf[i];
        var player = client.users.find(user => user.username === element)
        player.send("You are a __Werewolf__, when it is your turn at night, please go to <#599846751566037002> and type `//kill [player name]` to kill him, be sure to communicate with your teammates by texting in <#599846751566037002> first (If you have some teammates).")    
    }

    for (let i = 0; i < entry.WhiteWolf.length; i++) {
        const element = entry.WhiteWolf[i];
        var player = client.users.find(user => user.username === element)
        player.send("You are a __White Werewolf__, when it is your turn at night, please go to <#599846751566037002> and type `//kill [player name]` to kill him, be sure to communicate with your teammates by texting in <#599846751566037002> first (If you have some teammates).")    
    }

    for (let i = 0; i < entry.BlackWolf.length; i++) {
        const element = entry.BlackWolf[i];
        var player = client.users.find(user => user.username === element)
        player.send("You are a __Black Werewolf__, when it is your turn at night, please go to <#599846751566037002> and type `//kill [player name]` to kill him, be sure to communicate with your teammates by texting in <#599846751566037002> first (If you have some teammates).")    
    }

    for (let i = 0; i < entry.Hunter.length; i++) {
        const element = entry.Hunter[i];
        var player = client.users.find(user => user.username === element)
        player.send("You are a __Hunter__, when you die, you can also kill someone (Except if you are being killed by a Witch).\nUse `//kill [player name]` in <#599846751566037002> after you die.\n(I will announce it on <#599846751566037002> if you are killed. You will not be able to use the `//kill` command if you are being killed by a Witch.)")
    }

    for (let i = 0; i < entry.FortuneTeller.length; i++) {
        const element = entry.FortuneTeller[i];
        var player = client.users.find(user => user.username === element)
        player.send("You are a __Fortune Teller__, when it is you turn at night, please go to <#599846751566037002> and type `//inspect [player name]` to check if a player is a Werewolf or not.")
    }

    for (let index = 0; index < entry.Guard.length; index++) {
        const element = entry.Guard[index];
        var player = client.users.find(user => user.username === element)
        player.send("You are a __Guard__, when it is you turn at night, please go to <#599846751566037002> and type `//protect [player name]` to protect a player from Werewolves.\n_**WARNING : THE PLAYER WILL STILL DIE IF YOU AND THE WITCH CHOSE TO SAVE THE SAME PLAYER.**_")
    }

    for (let i = 0; i < entry.Guard.length; i++) {
        const element = entry.Guard[i];
        var player = client.users.find(user => user.username === element)
        player.send("You are a __Witch__, when it is you turn at night, please go to <#599846751566037002> and type `//heal [player name]` to heal a player (Including yourself) from Werewolves, or use `//kill [player name]` to kill a player.\nWARNING : THE PLAYER WILL STILL DIE IF YOU AND THE GUARD CHOSE TO SAVE THE SAME PLAYER.**_")
    }

    for (let i = 0; i < entry.NightWitch.length; i++) {
        const element = entry.NightWitch[i];
        var player = client.users.find(user => user.username === element)
        player.send("You are a __Witch__, when it is you turn at night, please go to <#599846751566037002> and type `//heal [player name]` to heal a player (**Except yourself**) from Werewolves, or use `//kill [player name]` to kill a player.\nWARNING : THE PLAYER WILL STILL DIE IF YOU AND THE GUARD CHOSE TO SAVE THE SAME PLAYER.**_")
    }

    for (let i = 0; i < entry.Knight.length; i++) {
        const element = entry.Knight[i];
        var player = client.users.find(user => user.username === element)
        player.send("You are a __Knight__. Idk what this chara's special ability yeet")
    }

    for (let i = 0; i < entry.Idiot.length; i++) {
        const element = entry.Idiot[i];
        var player = client.users.find(user => user.username === element)
        player.send("You are a __Idiot__ (Hopefully not irl). Idk what this chara's special ability yeet")
    }
}

module.exports = informRoles