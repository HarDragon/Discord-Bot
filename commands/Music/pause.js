const distube = require('distube')
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'pause',
    description: 'pause',

    async run(bot, message, args) {

        if (!message.member.voice.channel) return message.channel.send("You must be in a vc to use this command.")

        let queue = await bot.distube.getQueue(message)

        if (queue) {
            bot.distube.pause(message)

            const music = new MessageEmbed()
                .setColor('#E50000')
                .setDescription("The current song has been paused.")
                .setTimestamp()
                .setFooter('Waiting to resume');
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

