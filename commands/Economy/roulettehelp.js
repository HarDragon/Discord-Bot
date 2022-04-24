const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'rhelp',
    description: 'helps',
    async run(bot, message, args) {
        const help = new MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle('Legendary Empress')
            .setDescription('r <amount> <spot>')
            .setThumbnail('https://data.whicdn.com/images/158688661/original.gif')
            .addFields(
                { name: 'red', value: '`bet won!`', inline: true },
                { name: 'black', value: '`bet won!`', inline: true },
                { name: 'green', value: '`bet x16 won!`', inline: true },
                { name: 'a single number', value: '`bet x35 won!`', inline: true },
                { name: 'low', value: '`bet won!`', inline: true },
                { name: 'high', value: '`bet won!`', inline: true },
                { name: 'even', value: '`bet won!`', inline: true },
                { name: 'odd', value: '`bet won!`', inline: true },
                { name: '1-12', value: '`bet x2 won!`', inline: true })
            .addFields(
                { name: '13-24', value: '`bet x2 won!`', inline: true },
                { name: '25-36', value: '`bet x2 won!`', inline: true },
                { name: '1-3', value: '`bet x11 won!`', inline: true })
            .addFields(
                { name: '4-6', value: '`bet x11 won!`', inline: true },
                { name: '7-9', value: '`bet x11 won!`', inline: true },
                { name: '10-12', value: '`bet x11 won!`', inline: true },
                { name: '13-15', value: '`bet x11 won!`', inline: true })
            .addFields(
                { name: '16-18', value: '`bet x11 won!`', inline: true },
                { name: '19-21', value: '`bet x11 won!`', inline: true },
                { name: '22-24', value: '`bet x11 won!`', inline: true })
            .addFields(
                { name: '25-27', value: '`bet x11 won!`', inline: true },
                { name: '28-30', value: '`bet x11 won!`', inline: true },
                { name: '31-33', value: '`bet x11 won!`', inline: true },
                { name: '34-36', value: '`bet x11 won!`', inline: true })
            .setTimestamp()
            // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
            .setFooter('Hystogan\'s Casino')
        message.channel.send(help);

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag)
    }
}
