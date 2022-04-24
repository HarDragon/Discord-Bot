const db = require("quick.db");
const ms = require("parse-ms");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'timely',
    description: 'hourly',

    async run(bot, message, args) {

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
            "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"];

        var colour = colours[Math.floor(Math.random() * colours.length)];



        let user = message.author;
        let timeout = 3600000;
        let amount = 125;

        var Economy = new db.table('Economy')




        let balance = await Economy.fetch(`${user.id}.balance`);

        let bank = await Economy.fetch(`${user.id}.bank`);

        let hourly = await Economy.fetch(`${user.id}.hourly`);

        let dailyluck = await Economy.fetch(`${user.id}.dailyluck`);

        let prediction = await Economy.fetch(`${user.id}.predictiontime`);

        let owned = await Economy.fetch(`${user.id}.owned`);

        let robtime = await Economy.fetch(`${user.id}.robtime`);

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

        } else if (hourly !== null && timeout - (Date.now() - hourly) > 0) {

            let time = ms(timeout - (Date.now() - hourly));

            const number = new MessageEmbed()
                .setColor(colour)
                .setDescription("*" + `You've already collected your timely ${user.username} try again in ${time.minutes}m and ${time.seconds}s.` + "*")
                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                .setTimestamp()
                .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
            message.channel.send(number);

        } else {

            Economy.add(`${user.id}.balance`, amount);
            Economy.set(`${user.id}.hourly`, Date.now());

            const number = new MessageEmbed()
                .setColor(colour)
                .setDescription("*" + `${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback} has been added to your balance ${user.username}.` + "*")
                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                .setTimestamp()
                .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
            message.channel.send(number);

        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag)
        
    }
}