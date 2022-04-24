const distube = require('distube')
const { MessageEmbed } = require('discord.js')



module.exports = {
    name: 'skip',
    description: 'skip',

    async run(bot, message, args) {

        if (!message.member.voice.channel) return message.channel.send("You must be in a vc to use this command.")

        let queue = await bot.distube.getQueue(message)

        if (queue) {
            bot.distube.skip(message)
            
            const music = new MessageEmbed()
                .setColor('#E50000')
                .setDescription("Skipped the current song ^-^")
                .setTimestamp()
                .setFooter('Next Song Incoming');
            message.channel.send(music)

        } else if (!queue) {
            return
        }


        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag + "\n")

    }
}