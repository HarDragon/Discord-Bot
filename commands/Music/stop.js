const distube = require('distube')
const { MessageEmbed } = require('discord.js')



module.exports = {
    name: 'dc',
    description: 'disconnect',

    async run(bot, message, args) {

        if (!message.member.voice.channel) return message.channel.send("You must be in a vc to use this command.")

        let queue = await bot.distube.getQueue(message)

        if (queue) {

            bot.distube.stop(message)

            const music = new MessageEmbed()
                .setColor('#E50000')
                // .setThumbnail('https://media0.giphy.com/media/PmjPav5JKQCYRcTAPy/giphy.gif')
                .setDescription("Minato has left the voice chat o-o")
                .setTimestamp()
                .setFooter('Bye');
            message.channel.send(music)

        } else if (!queue) {
            return
        }


        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag
            + "\nSong: " + args + "\n")

    }
}