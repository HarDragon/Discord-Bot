const fs = require("fs");
const db = require("quick.db")
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'br',
    description: 'betroll',

    async run(bot, message, args) {

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"


        colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
            "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"]

        var colour = colours[Math.floor(Math.random() * colours.length)];



        let user = message.mentions.users.first() || message.author;
        var Economy = new db.table('Economy')


        var amount = args[0];


        let bal = await Economy.fetch(`${user.id}.balance`);
        var chance = Math.floor(Math.random() * 101);


        if (amount === "all") {

            if (chance < 60) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*uh no! ${user.username}. it was a ${chance}, you didn't win anything.. better luck next time ^-^*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.subtract(`${user.id}.balance`, bal)

            } else if (chance > 74 && chance < 90) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*yaay! ${user.username}. it's a ${chance}! you won ${moneysymbolfront}${bal * 2} ${moneysymbolback}! owo*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.add(`${user.id}.balance`, bal * 2)
                Economy.subtract(`${user.id}.balance`, bal)

            } else if (chance > 89 && chance < 100) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*yaay! ${user.username}. it's a ${chance}! you won ${moneysymbolfront}${bal * 5} ${moneysymbolback}! owo*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.add(`${user.id}.balance`, bal * 5)
                Economy.subtract(`${user.id}.balance`, bal)

            } else if (chance === 100) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*yaay! ${user.username}. it's a ${chance}! you won ${moneysymbolfront}${bal * 10} ${moneysymbolback}! you deserve this crown 👑*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.add(`${user.id}.balance`, bal * 10)
                Economy.subtract(`${user.id}.balance`, bal)

            }

        } else if (amount === "half") {

            if (chance < 60) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*uh no! ${user.username}. it was a ${chance}, you didn't win anything.. better luck next time ^-^*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.subtract(`${user.id}.balance`, bal / 2)

            } else if (chance > 59 && chance < 90) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*yaay! ${user.username}. it's a ${chance}! you won ${moneysymbolfront}${(bal / 2) * 2} ${moneysymbolback}! owo*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.add(`${user.id}.balance`, (bal / 2) * 2)
                Economy.subtract(`${user.id}.balance`, (bal / 2))

            } else if (chance > 89 && chance < 100) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*yaay! ${user.username}. it's a ${chance}! you won ${moneysymbolfront}${(bal / 2) * 5} ${moneysymbolback}! owo*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.add(`${user.id}.balance`, (bal / 2) * 5)
                Economy.subtract(`${user.id}.balance`, (bal / 2))

            } else if (chance === 100) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*yaay! ${user.username}. it's a ${chance}! you won ${moneysymbolfront}${(bal / 2) * 10} ${moneysymbolback}! you deserve this crown 👑*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.add(`${user.id}.balance`, (bal / 2) * 10)
                Economy.subtract(`${user.id}.balance`, (bal / 2))

            }
        } else if (amount <= bal && amount > 1) {

            if (chance < 60) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*uh no! ${user.username}. it was a ${chance}, you didn't win anything.. better luck next time ^-^*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.subtract(`${user.id}.balance`, amount)

            } else if (chance > 69 && chance < 90) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*yaay! ${user.username}. it's a ${chance}! you won ${moneysymbolfront}${amount * 2} ${moneysymbolback}! owo*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.add(`${user.id}.balance`, amount * 2)
                Economy.subtract(`${user.id}.balance`, amount)

            } else if (chance > 89 && chance < 100) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*yaay! ${user.username}. it's a ${chance}! you won ${moneysymbolfront}${amount * 4} ${moneysymbolback}! owo*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.add(`${user.id}.balance`, amount * 4)
                Economy.subtract(`${user.id}.balance`, amount)

            } else if (chance === 100) {

                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*yaay! ${user.username}. it's a ${chance}! you won ${moneysymbolfront}${amount * 10} ${moneysymbolback}! you deserve this crown 👑*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.add(`${user.id}.balance`, amount * 10)
                Economy.subtract(`${user.id}.balance`, amount)

            }
        } else if (amount >= bal) {
            message.channel.send(`uh no! ${user} looks like you don't have that much money ^-^`)

        } else if (/./.test(amount)) {
            message.channel.send(`uh no! ${user} that doesn't work around here`)
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")

    }
}


