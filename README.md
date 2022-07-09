<a href="https://nodei.co/npm/discord-image-generation/"><img src="https://nodei.co/npm/discord-image-generation.png?downloads=true&downloadRank=true&stars=true"></a>

# discord-image-generation

A powerfull module that allow you to generate awesome images.

# Bugs and glitches

Feel free to report all bugs and glitches by creating an issue in the <a href="https://github.com/Mr-KayJayDee/discord-image-generation/issues">issue section.</a>

A correct and understandable issue contains : 
- Steps to reproduce 
- Code that summonned the error
- The complete error

Please join [this](https://discord.gg/5ZSGFYtnqw) community server to follow all my projects or if you need help.

# Links: 

### Support Server Community
<a href="https://discord.gg/5ZSGFYtnqw"><img src="https://discord.com/api/guilds/833309512412299276/widget.png" alt="Amandine support server"/></a>

### Amandine Discord Bot Support Server
<a href="https://discord.gg/Uqd2sQP"><img src="https://discord.com/api/guilds/527836578912010251/widget.png" alt="Amandine support server"/></a>

# Download

You can download it from <a href="https://www.npmjs.com/package/discord-image-generation">npmjs</a>.

```cli
npm i kojiro-image-generation
```

# Configuration

The first step is to import the module in your code.

```js
const KIG = require("kojiro-image-generation");
```

Then you have to request your image and send it as an attachement.

## Discord.js v12
```js
// Import the discord.js library.
const Discord = require("discord.js")
// Create a new discord.js client.
const bot = new Discord.Client()

const DIG = require("discord-image-generation");
> You can also destructure to avoid repeating DIG.

// Listen to the ready event
bot.on("ready", () => {
    console.log("ok");  
})

// Listen to the message event
bot.on("message", async (message) => {
    // Send the image in a simple message
    if (message.content === "*delete") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Delete().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)
    }
    // Send the message with the image attached to an embed
    if (message.content === "*blur") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Blur().getImage(avatar)
        // Add the image as an attachement
        let embed = new Discord.MessageEmbed()
            .setTitle("Blur")
            .setImage("attachment://delete.png")
        let attach = new Discord.MessageAttachment(img, "blur.png");;
        message.channel.send({ embed: embed, files: [attach])
    }
})

// Log in to the bot
bot.login("super_secret_token")
```

## Discord.js v13
```js
// Import the discord.js library.
const Discord = require("discord.js")
// Create a new discord.js client.
const bot = new Discord.Client()

const DIG = require("discord-image-generation");
> You can also destructure to avoid repeating DIG.

// Listen to the ready event
bot.on("ready", () => {
    console.log("ok");  
})

// Listen to the message event
bot.on("messageCreate", async (message) => {
    // Send the image in a simple message
    if (message.content === "*delete") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Delete().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send({ files: [attach] })
    }
    // Send the message with the image attached to an embed
    if (message.content === "*blur") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Blur().getImage(avatar)
        // Add the image as an attachement
        let embed = new Discord.MessageEmbed()
            .setTitle("Blur")
            .setImage("attachment://delete.png")
        let attach = new Discord.MessageAttachment(img, "blur.png");;
        message.channel.send({ embeds: [embed], files: [attach])
    }
})

// Log in to the bot
bot.login("super_secret_token")
```

# Available images


## Filters

- ``new DIG.Blur().getImage(`<Avatar>`, `<Level(Number)>`);``

![Blur](https://imgur.com/JqpNFTY.png)

- ``new DIG.Gay().getImage(`<Avatar>`);``

![Gay](https://imgur.com/BDTrXzZ.png)

- ``new DIG.Greyscale().getImage(`<Avatar>`);``

![Greyscale](https://imgur.com/h3ahY7Z.png)

- ``new DIG.Invert().getImage(`<Avatar>`);``

![Invert](https://imgur.com/Rl0wGQM.png)

- ``new DIG.Sepia().getImage(`<Avatar>`);``

![Sepia](https://imgur.com/OTbKVtj.png)


## Gifs

- ``new DIG.Blink().getImage(`<Avatar>`, `<Avatar2>`.....);``

> You can add as many images as you want 

![Blink](https://imgur.com/JjUXmRU.gif)

- ``new DIG.Triggered().getImage(`<Avatar>`);``

![Triggered](https://imgur.com/0QvyYQa.gif)


## Montage

- ``new DIG.Ad().getImage(`<Avatar>`);``

![Ad](https://imgur.com/H7FvUtZ.png)

- ``new DIG.Affect().getImage(`<Avatar>`);``

![Affect](https://imgur.com/g4Gaehb.png)

- ``new DIG.Batslap().getImage(`<Avatar>`, `<Avatar2>`);``

![Batslap](https://imgur.com/oYMpa5A.png)

- ``new DIG.Beautiful().getImage(`<Avatar>`);``

![Beautiful](https://imgur.com/HGZkmXo.png)

- ``new DIG.Bed().getImage(`<Avatar>`, `<Avatar2>`);``

![Bed](https://imgur.com/b1idSnr.png)

- ``new DIG.Bobross().getImage(`<Avatar>`);``

![Bobross](https://imgur.com/lATDohK.png)

- ``new DIG.ConfusedStonk().getImage(`<Avatar>`);``

![ConfusedStonk](https://imgur.com/b4UB3BE.png)

- ``new DIG.Delete().getImage(`<Avatar>`);``

![Delete](https://imgur.com/6V1IYJp.png)

- ``new DIG.DiscordBlack().getImage(`<Avatar>`)``

![DiscordBlack](https://imgur.com/dTX3wta.png)

- ``new DIG.DiscordBlue().getImage(`<Avatar>`)``

![DiscordBlue](https://imgur.com/q1bRGrx.png)

- ``new DIG.DoubleStonk().getImage(`<Avatar`, `<Avatar2>`)``

![DoubleStonk](https://imgur.com/HbuuUC6.png)

- ``new DIG.Facepalm().getImage(`<Avatar>`);``

![Facepalm](https://imgur.com/cdPC3P1.png)

- ``new DIG.Hitler().getImage(`<Avatar>`);``

![Hitler](https://imgur.com/wK9puxH.png)

- ``new DIG.Jail().getImage(`<Avatar>`);``

![Jail](https://imgur.com/QslACNo.png)

- ``new DIG.Karaba().getImage(`<Avatar>`);``

![Karaba](https://imgur.com/4aEZs6v.png)

- ``new DIG.Kiss().getImage(`<Avatar>`, `<Avatar2>`);``

![Kiss](https://imgur.com/sSoCAeH.png)

- ``new DIG.LisaPresentation().getImage(`<Text>`);``

![LisaPresentation](https://imgur.com/u5cPVVW.png)

> Limited to 300char

(Thanks to sιмση ℓεcℓεяε#5765)
- ``new DIG.Mms().getImage(`<Avatar>`);``

![MMS](https://imgur.com/nH3URHb.png)

- ``new DIG.NotStonk().getImage(`<Avatar>`);``

![NotStonk](https://imgur.com/NJ2Svtj.png)

- ``new DIG.Podium().getImage(`<Avatar1>, <Avatar2>, <Avatar2>, <Name1>, <Name2>, <Name3>`);``

![Podium](https://imgur.com/bQoKf0a.png)

- ``new DIG.Poutine().getImage(`<Avatar>`);``

![Poutine](https://imgur.com/UpQJHzM.png)

- ``new DIG.Rip().getImage(`<Avatar>`);``

![RIP](https://imgur.com/qhyZKfz.png)

- ``new DIG.Spank().getImage(`<Avatar>`, `<Avatar2>`);``

![Spank](https://imgur.com/25gq0es.png)

- ``new DIG.Stonk().getImage(`<Avatar>`);``

![Stonk](https://imgur.com/oAVgevR.png)

- ``new DIG.Tatoo().getImage(`<Avatar>`)``

![Tatoo](https://imgur.com/wJju4UJ.png)

- ``new DIG.Thomas().getImage(`<Avatar>`);``

![Thomas](https://imgur.com/7R37J2j.png)

- ``new DIG.Trash().getImage(`<Avatar>`);``

![Trash](https://imgur.com/nwAHGgF.png)

- ``new DIG.Wanted().getImage(`<Avatar>`, `<Currency>`);``

> Currency ($, €, ...)

![Wanted](https://imgur.com/NJfzJeN.png)


## Utils

- ``new DIG.Circle().getImage(`<Avatar>`);``

![Circle](https://imgur.com/0Zo8NYS.png)

- ``new DIG.Color().getImage(`<Color>`);``

> An hex color is needed, like "#FF0000"

![Color](https://imgur.com/40tMwfe.png)

# Changelog 

## v1.0.6
- Added Choke
- Added Arrest
- Added News
- Added Couple

Credits to Mr-KayJayDee and Alex15#0010
