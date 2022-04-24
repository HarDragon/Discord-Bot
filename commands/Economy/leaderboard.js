const db = require("quick.db")
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'lb',
    description: 'leaderboard',

    async run(bot, message, args) {


        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        user = message.author;


        var Economy = new db.table('Economy')

        var lbinfo = [];
        contentoverall = "";


        size = Math.ceil(Economy.all().length)

        for (let i = 0; i < size; i++) {

            // console.log(bot.users.cache.get(Economy.all()[i].ID), Economy.all()[i].data.balance, Economy.all()[i].data.bank)


            var lbnames = ["Dragon#", "Unicorn#", "Fairy#", "Mermaid#", "Werewolf#", "Sphinx#", "Phoneix#", "Ghoul#",
                "Troll#", "Vampire#", "Beast#", "Hydra#", "Monkey#", "Potato#", "Boop#"]

            var lbpicker = lbnames[Math.floor(Math.random() * lbnames.length)];


            var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

            var num1 = nums[Math.floor(Math.random() * nums.length)];
            var num2 = nums[Math.floor(Math.random() * nums.length)];
            var num3 = nums[Math.floor(Math.random() * nums.length)];
            var num4 = nums[Math.floor(Math.random() * nums.length)];

            num = num1 + num2 + num3 + num4;


            lbname = lbpicker + num


            personname = bot.users.cache.get(Economy.all()[i].ID)
            personbalance = Economy.all()[i].data.balance
            personbank = Economy.all()[i].data.bank
            networth = (personbalance + personbank).toFixed(0)
            net = (personbalance + personbank).toLocaleString()

            if (typeof personname !== 'undefined') {

                lbinfo.push({
                    name: "**" + personname.tag + "**",
                    balance: personbalance,
                    bank: personbank,
                    networth: networth,
                    net: net
                });

            } else {

                lbinfo.push({
                    name: lbname,
                    balance: personbalance,
                    bank: personbank,
                    networth: networth,
                    net: net
                });
            }
        }

        console.log(lbinfo[0])
        sortedinfo = lbinfo.sort((a, b) => Number(b.networth) - Number(a.networth));


        for (let i = 0; i < size; i++) {


            var lbpicker = lbnames[Math.floor(Math.random() * lbnames.length)];

            contentoverall += `${(i + 1)}. ${sortedinfo[i].name} - ${moneysymbolfront}${sortedinfo[i].net} ${moneysymbolback}` + `\n`

            // if (i < 9) {

            //     contentoverall += `${(i + 1)}.  ` + `**` + `${sortedinfo[i].name} ** - ` + `${moneysymbolfront}${sortedinfo[i].net} ${moneysymbolback}` + `\n`

            // } else {

            //     contentoverall += `${(i + 1)}. ` + `**` + `${sortedinfo[i].name} ** - ` + `${moneysymbolfront}${sortedinfo[i].net} ${moneysymbolback}` + `\n`

            // }

        }

        var leaderboard = contentoverall.split("\n")

        console.log(leaderboard)


        if (!args[0]) {

            if (size > 0 || size == 10 || size < 11) {

                size = 10;

                const lb = new MessageEmbed()
                    .setColor('#FF1493')
                    // .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
                    .setAuthor(`${message.guild.name} - Leaderboard of Legends`)
                    .setDescription(leaderboard.slice(0, size))
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`Hystogan's Economy - Page 1`, user.displayAvatarURL())
                message.channel.send(lb);

            }

        } else if (args[0] == "2") {

            if (size < 11) {

                const lb = new MessageEmbed()
                    .setColor('#FF1493')
                    .setAuthor(`${message.guild.name} - Leaderboard of Legends`)
                    .addFields(
                        { name: "Error 404", value: "This leaderboard does not yet exist", inline: true },
                    )
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`Hystogan's Economy - Page 2`, user.displayAvatarURL())
                message.channel.send(lb);


            } else if (size > 10 || size < 21 || size == 20) {

                size = 20;

                const lb = new MessageEmbed()
                    .setColor('#FF1493')
                    .setAuthor(`${message.guild.name} - Leaderboard of Legends`)
                    .setDescription(leaderboard.slice(size / 2, size))
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`Hystogan's Economy - Page 2`, user.displayAvatarURL())
                message.channel.send(lb);

            }
        } else if (args[0] == "3") {

            if (size < 21) {

                const lb = new MessageEmbed()
                    .setColor('#FF1493')
                    .setAuthor(`${message.guild.name} - Leaderboard of Legends`)
                    .addFields(
                        { name: "Error 404", value: "This leaderboard does not yet exist", inline: true },
                    )
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`Hystogan's Economy - Page 3`, user.displayAvatarURL())
                message.channel.send(lb);


            } else if (size > 20 || size < 31 || size == 30) {


                const lb = new MessageEmbed()
                    .setColor('#FF1493')
                    .setAuthor(`${message.guild.name} - Leaderboard of Legends`)
                    .setDescription(leaderboard.slice(20, 30))
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`Hystogan's Economy - Page 3`, user.displayAvatarURL())
                message.channel.send(lb);

            }
        }

        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag)
    }
}