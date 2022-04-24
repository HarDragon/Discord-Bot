const db = require("quick.db")
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'burn',
    description: 'add',

    async run(bot, message, args) {


        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        amount = args[1]



        let user = message.mentions.users.first() || message.author;
        var Economy = new db.table('Economy')


        if (message.author.id === '273185633177174016' || message.member.roles.cache.some(role => role.name === 'HCOM')) {


            if (!args[1]) return message.reply("please specify an amount to minus.")

            // if (isNaN(args[1]) || !Number.isInteger(args[1])) return message.reply("that was not a valid number.")

            if (args[1] == "all") {

                amount = await Economy.fetch(`${user.id}.balance`)

                const number = new MessageEmbed()
                    .setColor("#000000")
                    .setTitle("Successfully burnt")
                    .setURL("https://www.youtube.com/c/Hystogan")
                    .setDescription(`I have sadly burnt ${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback} from ${user.username}'s account.`)
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.subtract(`${user.id}.balance`, amount)

            } else {


                const number = new MessageEmbed()
                    .setColor("#000000")
                    .setTitle("Successfully burnt")
                    .setURL("https://www.youtube.com/c/Hystogan")
                    .setDescription(`I have sadly burnt ${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback} from ${user.username}'s account.`)
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);

                Economy.subtract(`${user.id}.balance`, args[1])

            }

        } else {

            return message.reply("You can't burn the money in this world!")

        }

        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag
            + "\nAmount: " + args[1] + "\n")

    }
}