const db = require("quick.db")
const ms = require("parse-ms");
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const ran = new Set();

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var prizes = [1000, 1500, 1000, 1500, 2500, 2500, 5000, 7500]


module.exports = {
    name: 'predict',
    description: 'random',

    async run(bot, message, args) {


        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
            "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"];

        var colour = colours[Math.floor(Math.random() * colours.length)];

        let user = message.author;
        let timeout = 1000;

        var Economy = new db.table('Economy')


        var random = numbers[Math.floor(Math.random() * numbers.length)];
        var prize = prizes[Math.floor(Math.random() * prizes.length)];


        let prediction = await Economy.fetch(`${user.id}.predictiontime`);

        if (prediction !== null && timeout - (Date.now() - prediction) > 0) {
            let time = ms(timeout - (Date.now() - prediction));

            const number = new MessageEmbed()
                .setColor(colour)
                .setDescription("*" + `You've tried guessing ${user.username} try again in ${time.hours}h and ${time.minutes}m and ${time.seconds}s.` + "*")
                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                .setTimestamp()
                .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
            message.channel.send(number);

        } else {

            if (ran.size == 1) {
                message.channel.send("*" + `Oi you wait! Someone else is trying to get free money ${user.username}` + "*");
            } else {

                message.channel.send("**" + `Choose a Number ${user.username}` + "**")
                message.channel.send("`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`")


                let counter = 0;
                const filter = m => m.content.includes(parseInt(m.content))
                let collector = new Discord.MessageCollector(message.channel, filter);


                collector.on('collect', (m, col) => {
                    if (message.author.bot) return;
                    console.log("Collected message: " + m.content);
                    counter++
                    if (counter === 1) {
                        collector.stop()
                    }
                });
                collector.on('end', collected => {
                    console.log("Messages collected: " + collected.size);
                    console.log(collected.last().author.username);
                    console.log(collected.last().content);

                    setTimeout(function () {
                        if (collected.last().content == random) {
                            message.channel.send(`*Yay! it was ${random}*`)
                            message.channel.send(`*Rolling the prize wheel...*`)
                            setTimeout(function () {

                                const number = new MessageEmbed()
                                    .setColor(colour)
                                    .setDescription(`*${user.username} you win ${moneysymbolfront}${prize} ${moneysymbolback}*`)
                                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                                    .setTimestamp()
                                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                                message.channel.send(number);

                                Economy.add(`${collected.last().author.id}.balance`, prize);
                                Economy.set(`${collected.last().author.id}.predictiontime`, Date.now());
                            }, 3000);
                        } else {
                            const number = new MessageEmbed()
                                .setColor(colour)
                                .setDescription("*" + `aww no! it was ${random} ${user.username} better luck next time..` + "*")
                                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                                .setTimestamp()
                                .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                            message.channel.send(number);
                            Economy.set(`${user.id}.predictiontime`, Date.now());
                        }
                    }, 3000);
                });
            }

            ran.add(user.id);
            setTimeout(() => {
                // Removes the user from the set after a minute
                ran.delete(user.id);
            }, 10000);

        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag)

    }
}