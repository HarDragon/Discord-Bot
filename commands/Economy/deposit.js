const fs = require("fs");
const db = require("quick.db")
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'dep',
    description: 'deposit',

    async run(bot, message, args) {

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"


        let user = message.author;
        var Economy = new db.table('Economy')


        let amount = args[0]




        let balance = await Economy.fetch(`${user.id}.balance`);

        let bank = await Economy.fetch(`${user.id}.bank`);

        let hourly = await Economy.fetch(`${user.id}.hourly`);

        let dailyluck = await Economy.fetch(`${user.id}.dailyluck`);

        let prediction = await Economy.fetch(`${user.id}.predictiontime`);

        let owned = await Economy.fetch(`${user.id}.owned`);

        let worktime = await Economy.fetch(`${user.id}.worktime`);


        

        if (balance === null) {
            
            balance = Economy.add(`${user.id}.balance`, 0)

            bank = Economy.add(`${user.id}.bank`, 0)

            hourly = Economy.add(`${user.id}.hourly`, 0)

            dailyluck = Economy.add(`${user.id}.dailyluck`, 0)

            prediction = Economy.add(`${user.id}.predictiontime`, 0)

            owned = Economy.push(`${user.id}.owned`, 'Nothing')

            robtime = Economy.add(`${user.id}.robtime`, 0)

            worktime = Economy.add(`${user.id}.worktime`, 0)

            message.channel.send(`Welcome to Hystogan's Economy ${user}, Spend your money wisley ^-^`)

        } else if (!amount) {

            message.channel.send(`*${user} you must entered an amount for their to be a transaction.*`)

        } else if (amount == "all" && balance > 0) {

            amount = balance;

            colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
                "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"]

            var colour = colours[Math.floor(Math.random() * colours.length)];



            Economy.add(`${user.id}.bank`, amount)
            Economy.subtract(`${user.id}.balance`, amount)


            const number = new MessageEmbed()
                .setColor(colour)
                .setDescription(`*Thank you for banking with Minato, ${user.username}*` + ` ***${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback}*** ` + `*has been deposited into your bank.*`)
                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                .setTimestamp()
                .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
            message.channel.send(number);


        } else if (amount <= balance) {

            colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
                "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"]

            var colour = colours[Math.floor(Math.random() * colours.length)];



            Economy.add(`${user.id}.bank`, amount)
            Economy.subtract(`${user.id}.balance`, amount)


            const number = new MessageEmbed()
                .setColor(colour)
                .setDescription(`*Thank you for banking with Minato, ${user.username}*` + ` ***${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback}*** ` + `*has been deposited into your bank.*`)
                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                .setTimestamp()
                .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
            message.channel.send(number);


        } else {

            message.channel.send(`*Sorry, ${user} doesn't look like you enough funds to make that transaction.*`)

        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag
        + "\nAmount: " + amount + "\n")
    }
}

