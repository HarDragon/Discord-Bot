const db = require("quick.db");
const ms = require("parse-ms");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: '--------work',
    description: 'work',

    async run(bot, message, args) {

        let moneysymbolfront = ""


        var word = words[Math.floor(Math.random() * words.length)];

        colours = ["#FFF700", "#FF007C", "#00CCCC"]

        var colour = colours[Math.floor(Math.random() * colours.length)];



        let user = message.author;
        let timeout = 1800000;

        var amounts = [100, 150, 200, 100, 150, 200, 250, 300, 500];
        var amount = amounts[Math.floor(Math.random() * amounts.length)];

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

        } else if (worktime !== null && timeout - (Date.now() - worktime) > 0) {

            let time = ms(timeout - (Date.now() - worktime));

            const number = new MessageEmbed()
                .setColor(colour)
                .setDescription("*" + `You've already worked ${user.username} try again in ${time.minutes}m and ${time.seconds}s.` + "*")
                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                .setTimestamp()
                .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
            message.channel.send(number);

        } else {

            Economy.add(`${user.id}.balance`, amount);
            Economy.set(`${user.id}.worktime`, Date.now());

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