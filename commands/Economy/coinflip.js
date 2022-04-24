
const db = require("quick.db")
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'bf',
    description: 'betflip',

    async run(bot, message, args) {

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"


        colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
            "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"]

        var colour = colours[Math.floor(Math.random() * colours.length)];

        let user = message.author;
        var Economy = new db.table('Economy')


        let bal = await Economy.fetch(`${user.id}.balance`);
        let half = bal / 2;


        var coin = ["heads", "tails"];
        var flip = args[0];
        var amount = args[0];
        var guess = args[1];
        const win = amount * 0.95;
        const wholenum = Math.floor(win);

        var toss = coin[Math.floor(Math.random() * coin.length)];


        if (flip == 'flip') {

            if (toss === "heads") {
                const heads = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`its heads ${message.author.username}!`)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/c/c0/Canadian_Dime_-_obverse.png')
                message.channel.send(heads);

            } else {
                const tails = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`its tails ${message.author.username}!`)
                    .setThumbnail('https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png')
                message.channel.send(tails);
            }


        } else if (amount == "all" && (guess == "tails" || guess == "heads")) {

            if (bal <= 0) return message.reply("you are kinda broke..")

            if (guess === toss) {
                if (toss === "heads") {
                    const right = new MessageEmbed()
                        .setColor(colour)
                        .setThumbnail('https://upload.wikimedia.org/wikipedia/en/c/c0/Canadian_Dime_-_obverse.png')
                        .setDescription(`Well done! ${user.username} ^-^\nIts ${toss},  you win ${moneysymbolfront}${(bal * 0.95).toFixed(0)} ${moneysymbolback}!`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(right);
                    Economy.add(`${user.id}.balance`, (bal * 0.95).toFixed(0))
                } else {
                    const right = new MessageEmbed()
                        .setColor(colour)
                        .setThumbnail('https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png')
                        .setDescription(`Well done! ${user.username} ^-^\nIts ${toss},  you win ${moneysymbolfront}${(bal * 0.95).toFixed(0)} ${moneysymbolback}!`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(right);
                    Economy.add(`${user.id}.balance`, (bal * 0.95).toFixed(0))
                }
            } else {
                if (toss === "heads") {
                    const wrong = new MessageEmbed()
                        .setColor(colour)
                        .setThumbnail('https://upload.wikimedia.org/wikipedia/en/c/c0/Canadian_Dime_-_obverse.png')
                        .setDescription(`Uh oh.. ${user.username} it's ${toss}\nYou lost ${moneysymbolfront}${(bal).toFixed(0)} ${moneysymbolback}.`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(wrong);
                    Economy.subtract(`${user.id}.balance`, (bal).toFixed(0))
                } else {
                    const wrong = new MessageEmbed()
                        .setColor(colour)
                        .setThumbnail('https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png')
                        .setDescription(`Uh oh.. ${user.username} it's ${toss}\nYou lost ${moneysymbolfront}${(bal).toFixed(0)} ${moneysymbolback}.`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(wrong);
                    Economy.subtract(`${user.id}.balance`, (bal).toFixed(0))
                }
            }

        } else if (amount == "half" && (guess == "tails" || guess == "heads")) {

            if (bal <= 0) return message.reply("you are kinda broke..")

            if (guess === toss) {
                if (toss === "heads") {
                    const right = new MessageEmbed()
                        .setColor(colour)
                        .setThumbnail('https://upload.wikimedia.org/wikipedia/en/c/c0/Canadian_Dime_-_obverse.png')
                        .setDescription(`Well done! ${user.username} ^-^\nIts ${toss},  you win ${moneysymbolfront}${(half * 0.95).toFixed(0)} ${moneysymbolback}!`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(right);
                    Economy.add(`${user.id}.balance`, (half * 0.95).toFixed(0))
                } else {
                    const right = new MessageEmbed()
                        .setColor(colour)
                        .setThumbnail('https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png')
                        .setDescription(`Well done! ${user.username} ^-^\nIts ${toss},  you win ${moneysymbolfront}${(half * 0.95).toFixed(0)} ${moneysymbolback}!`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(right);
                    Economy.add(`${user.id}.balance`, (half * 0.95).toFixed(0))
                }
            } else {
                if (toss === "heads") {
                    const wrong = new MessageEmbed()
                        .setColor(colour)
                        .setThumbnail('https://upload.wikimedia.org/wikipedia/en/c/c0/Canadian_Dime_-_obverse.png')
                        .setDescription(`Uh oh.. ${user.username} it's ${toss}\nYou lost ${moneysymbolfront}${(half).toFixed(0)} ${moneysymbolback}.`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(wrong);
                    Economy.subtract(`${user.id}.balance`, (half).toFixed(0))
                } else {
                    const wrong = new MessageEmbed()
                        .setColor(colour)
                        .setThumbnail('https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png')
                        .setDescription(`Uh oh.. ${user.username} it's ${toss}\nYou lost ${moneysymbolfront}${(half).toFixed(0)} ${moneysymbolback}.`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(wrong);
                    Economy.subtract(`${user.id}.balance`, (half).toFixed(0))
                }
            }
        } else {

            if (isNaN(amount)) return message.reply("please specify an amount to bet, dummy!")

            if (bal <= 0) return message.reply("you are kinda broke..")

            if (amount > 0 && amount < bal + 1 && (guess == "tails" || guess == "heads")) {
                if (guess === toss) {
                    if (toss === "heads") {
                        const right = new MessageEmbed()
                            .setColor(colour)
                            .setThumbnail('https://upload.wikimedia.org/wikipedia/en/c/c0/Canadian_Dime_-_obverse.png')
                            .setDescription(`Well done! ${user.username} ^-^\nIts ${toss},  you win ${moneysymbolfront}${(wholenum * 0.95).toFixed(0)} ${moneysymbolback}!`)
                            // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                            .setTimestamp()
                            .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                        message.channel.send(right);
                        Economy.add(`${user.id}.balance`, (wholenum * 0.95).toFixed(0))
                    } else {
                        const right = new MessageEmbed()
                            .setColor(colour)
                            .setThumbnail('https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png')
                            .setDescription(`Well done! ${user.username} ^-^\nIts ${toss},  you win ${moneysymbolfront}${(wholenum * 0.95).toFixed(0)} ${moneysymbolback}!`)
                            // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                            .setTimestamp()
                            .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                        message.channel.send(right);
                        Economy.add(`${user.id}.balance`, (wholenum * 0.95).toFixed(0))
                    }
                } else {
                    if (toss === "heads") {
                        const wrong = new MessageEmbed()
                            .setColor(colour)
                            .setThumbnail('https://upload.wikimedia.org/wikipedia/en/c/c0/Canadian_Dime_-_obverse.png')
                            .setDescription(`Uh oh.. ${user.username} it's ${toss}\nYou lost ${moneysymbolfront}${Math.floor(amount)} ${moneysymbolback}.`)
                            // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                            .setTimestamp()
                            .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                        message.channel.send(wrong);
                        Economy.subtract(`${user.id}.balance`, Math.floor(amount))
                    } else {
                        const wrong = new MessageEmbed()
                            .setColor(colour)
                            .setThumbnail('https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png')
                            .setDescription(`Uh oh.. ${user.username} it's ${toss}\nYou lost ${moneysymbolfront}${Math.floor(amount)} ${moneysymbolback}.`)
                            // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                            .setTimestamp()
                            .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                        message.channel.send(wrong);
                        Economy.subtract(`${user.id}.balance`, Math.floor(amount))
                    }
                }
            } else {
                message.reply("please choose heads or tails, dummy or a valid amount!")
            }
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
    }
}