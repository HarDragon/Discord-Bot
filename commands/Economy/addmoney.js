const db = require("quick.db")
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'inject',
    description: 'add',

    async run(bot, message, args) {


        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"
        

        var word = words[Math.floor(Math.random() * words.length)];


        amount = args[1]




        let user = message.mentions.users.first() || message.author;
        var Economy = new db.table('Economy')


        let balance = await Economy.fetch(`${user.id}.balance`);


        if (message.author.id === '27315685633174016' || message.member.roles.cache.some(role => role.name === 'HCOM')) {


            if (!amount) return message.reply("please specify an amount to add.")

            // if (!Number.isSafeInteger(amount)) return message.reply("that was not a valid number.")

            const number = new MessageEmbed()
                .setColor("#000000")
                .setTitle("Successful Injection")
                .setURL("https://www.youtube.com/c/Hystogan")
                .setDescription(`I have happily injected ${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback} into ${user.username}'s account.`)
                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                .setTimestamp()
                .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
            message.channel.send(number);

            Economy.add(`${user.id}.balance`, args[1])

        } else {

            return message.reply("You can't control the money around here!")

        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag
        + "\nAmount: " + args[1] + "\n")
        
    }
}