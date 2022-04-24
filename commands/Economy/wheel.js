const db = require("quick.db")
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'spin',
    description: 'wheel',

    async run(bot, message, args) {

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        var Economy = new db.table('Economy')

        amount = args[0];
        let user = message.author;
        let bal = await Economy.fetch(`${user.id}.balance`);
        var numbers = ["nothing", "0.2", "0.5", "0.75", "0.125", "1.5", "2", "2.5"];
        var spin = numbers[Math.floor(Math.random() * numbers.length)];

        

        colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
            "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"]

        var colour = colours[Math.floor(Math.random() * colours.length)];

        if (amount > 0 && amount <= bal) {

            if (spin === "nothing") {
                message.channel.send('https://media.discordapp.net/attachments/565770932283768833/749038009139331143/SmartSelect_20200828-234732_Chrome.gif').then(msg => {
                    msg.delete({ timeout: 7000 });
                })
                setTimeout(function () {
                    const number = new MessageEmbed()
                        .setColor(colour)
                        .setDescription(`You win nothing ${user.username}..better luck next time ^-^`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(number);
                }, 7500);
                Economy.subtract(`${user.id}.balance`, amount.toFixed(0))
            } else if (spin === "0.2") {
                message.channel.send('https://media.discordapp.net/attachments/565770932283768833/749037974150447175/SmartSelect_20200828-234342_Chrome.gif').then(msg => {
                    msg.delete({ timeout: 7000 });
                })
                setTimeout(function () {
                    const number = new MessageEmbed()
                        .setColor(colour)
                        .setDescription(`Ouch! you only win ${moneysymbolfront}${(amount * 0.2).toFixed(0)} ${moneysymbolback} ${user.username}..better luck next time ^-^`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(number);
                }, 7500);
                Economy.subtract(`${user.id}.balance`, (amount * 0.8).toFixed(0))
            } else if (spin === "0.5") {
                message.channel.send('https://media.discordapp.net/attachments/565770932283768833/749037961588375744/SmartSelect_20200828-234132_Chrome.gif').then(msg => {
                    msg.delete({ timeout: 7000 });
                })
                setTimeout(function () {
                    const number = new MessageEmbed()
                        .setColor(colour)
                        .setDescription(`Ouch! you only win ${moneysymbolfront}${(amount * 0.5).toFixed(0)} ${moneysymbolback}..better luck next time ^-^`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(number);
                }, 7500);
                Economy.subtract(`${user.id}.balance`, (amount * 0.5).toFixed(0))
            } else if (spin === "0.75") {
                message.channel.send('https://media.discordapp.net/attachments/565770932283768833/749038004085194752/SmartSelect_20200828-234622_Chrome.gif').then(msg => {
                    msg.delete({ timeout: 7000 });
                })
                setTimeout(function () {
                    const number = new MessageEmbed()
                        .setColor(colour)
                        .setDescription(`Ouch! you only win ${moneysymbolfront}${(amount * 0.75).toFixed(0)} ${moneysymbolback} ${user.username}..better luck next time ^-^`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(number);
                }, 7500);
                Economy.subtract(`${user.id}.balance`, (amount * 0.25).toFixed(0))
            } else if (spin === "0.125") {
                message.channel.send('https://media.discordapp.net/attachments/565770932283768833/749037993540714506/SmartSelect_20200828-234449_Chrome.gif').then(msg => {
                    msg.delete({ timeout: 7000 });
                })
                setTimeout(function () {
                    const number = new MessageEmbed()
                        .setColor(colour)
                        .setDescription(`Ouch! you only win ${moneysymbolfront}${(amount * 0.125).toFixed(0)} ${moneysymbolback} ${user.username}..better luck next time ^-^`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(number);
                }, 7500);
                Economy.subtract(`${user.id}.balance`, (amount * 0.875).toFixed(0))
            } else if (spin === "1.5") {
                message.channel.send('https://media.discordapp.net/attachments/565770932283768833/749037941002862602/SmartSelect_20200828-233917_Chrome.gif').then(msg => {
                    msg.delete({ timeout: 7000 });
                })
                setTimeout(function () {
                    const number = new MessageEmbed()
                        .setColor(colour)
                        .setDescription(`Yay! you win ${moneysymbolfront}${(amount * 1.5).toFixed(0)} ${moneysymbolback} ${user.username} ^-^`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(number);
                }, 7500);
                Economy.add(`${user.id}.balance`, (amount * 0.5).toFixed(0))
            } else if (spin === "2") {
                message.channel.send('https://media.discordapp.net/attachments/565770932283768833/749037956576313465/SmartSelect_20200828-234058_Chrome.gif').then(msg => {
                    msg.delete({ timeout: 7000 });
                })
                setTimeout(function () {
                    const number = new MessageEmbed()
                        .setColor(colour)
                        .setDescription(`Yay! you win ${moneysymbolfront}${(amount * 2).toFixed(0)} ${moneysymbolback} ${user.username} ^-^`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(number);
                }, 7500);
                Economy.add(`${user.id}.balance`, amount.toFixed(0))
            } else if (spin === "2.5") {
                message.channel.send('https://media.discordapp.net/attachments/565770932283768833/749037916482699334/SmartSelect_20200828-233718_Chrome.gif').then(msg => {
                    msg.delete({ timeout: 7000 });
                })
                setTimeout(function () {
                    const number = new MessageEmbed()
                        .setColor(colour)
                        .setDescription(`Yay! you win ${moneysymbolfront}${(amount * 2.5).toFixed(0)} ${moneysymbolback} ${user.username} ^-^`)
                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        .setTimestamp()
                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                    message.channel.send(number);
                }, 7500);
                Economy.add(`${user.id}.balance`, (amount * 1.5).toFixed(0))
            }

        } else {
            message.channel.send(`Please enter an amount to bet ${user.username} ^-^`)
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag)

    }
}