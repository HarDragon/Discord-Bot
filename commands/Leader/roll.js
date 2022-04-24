const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'roll',
    description: 'roll',
    async run(bot, message, args) {

        var mapsi = ["farm", "launch base", "black market", "pipeline", "sanitarium"]
        var map1 = mapsi[Math.floor(Math.random() * mapsi.length)];

        var mapsb = ["nuketown", "const. site", "firing range", "rivertown", "frackling tower"]
        var map2 = mapsb[Math.floor(Math.random() * mapsb.length)];

        const roll = new MessageEmbed()
            .setColor('#000000')
            .setDescription("RF Map Selection")
            .addFields(
                { name: "Isolated:", value: map1, inline: true },
            )
            .addFields(
                { name: "Blackout:", value: map2, inline: true },
            )
            .setFooter('RF\'s Roller')
        message.channel.send(roll);

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
    }
}