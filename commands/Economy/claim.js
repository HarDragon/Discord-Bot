
const db = require("quick.db")
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'claim',
    description: 'claim',

    async run(bot, message, args) {


        banned = message.author

        if (banned.id === '') return message.channel.send(`You are banned from using this command.`);




        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"


        let user = message.author;
        var Economy = new db.table('Economy')

        let balance = await Economy.fetch(`${user.id}.balance`)

        let claimreward = await Economy.fetch(`${user.id}.claimreward`);



        num = parseInt(args[0])

        if (!args[0]) {

            message.channel.send(`Please Specify how much you would like to claim ${user}. (Minimum 100mc)`)

        } else if (!isNaN(num) && num <= claimreward && num >= 100) {

            const number = new MessageEmbed()
                .setColor("#000000")
                .setTitle(`Claim Minato Rewards`)
                .setDescription(`Congratulations, You have claimed ${moneysymbolfront}${num} ${moneysymbolback}.`)
                .setFooter(`${user.username}`, user.displayAvatarURL())
            message.channel.send(number);

            Economy.subtract(`${user.id}.claimreward`, num)
            Economy.add(`${user.id}.balance`, num)

        } else {

            message.channel.send(`That is not a valid amount to claim.`)

        }

        // console.log(Economy.all())

        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag + "\n")
    }
}