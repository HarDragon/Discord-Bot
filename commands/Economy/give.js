const db = require("quick.db")
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'give',
    description: 'give',

    async run(bot, message, args) {

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        // ${moneysymbolfront} ${moneysymbolback}


        colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
            "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"]

        var colour = colours[Math.floor(Math.random() * colours.length)];

        var Economy = new db.table('Economy')


        let user1 = message.mentions.users.first()
        let user2 = message.author;

        let bal1 = await Economy.fetch(`${user1.id}.balance`);
        let bal2 = await Economy.fetch(`${user2.id}.balance`);



        let bank = await Economy.fetch(`${user1.id}.bank`);

        let hourly = await Economy.fetch(`${user1.id}.hourly`);

        let dailyluck = await Economy.fetch(`${user1.id}.dailyluck`);

        let prediction = await Economy.fetch(`${user1.id}.predictiontime`);

        let owned = await Economy.fetch(`${user1.id}.owned`);

        let robtime = await Economy.fetch(`${user1.id}.robtime`);

        if (bal1 === null) {

            balance = Economy.add(`${user1.id}.balance`, 0)

            bank = Economy.add(`${user1.id}.bank`, 0)

            hourly = Economy.add(`${user1.id}.hourly`, 0)

            dailyluck = Economy.add(`${user1.id}.dailyluck`, 0)

            prediction = Economy.add(`${user1.id}.predictiontime`, 0)

            owned = Economy.push(`${user1.id}.owned`, 'Nothing')

            robtime = Economy.add(`${user1.id}.robtime`, 0)

            message.channel.send(`Welcome to Hystogan's Economy ${user}, Spend your money wisley ^-^`)

        }

        if (bal2 > 0 && args[1] > 1 && args[1] <= bal2) {

            if (!args[1]) return message.reply("please specify an amount to give.")

            if (isNaN(args[1])) return message.reply("that was not a valid number.")

            const number = new MessageEmbed()
                .setColor(colour)
                .setDescription(`*Successfully added ${moneysymbolfront}${args[1]} ${moneysymbolback} to ${user1.username}*`)
                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                .setTimestamp()
                .setFooter(`${user2.username} The ${word}`, user2.displayAvatarURL())
            message.channel.send(number);

            Economy.add(`${user1.id}.balance`, args[1])
            Economy.subtract(`${user2.id}.balance`, args[1])

        } else {
            message.reply("something went wrong, oopsies ^-^")
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag
        + "\nAmount: " + args[1] + "\n")

    }
}