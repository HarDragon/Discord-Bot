const distube = require('distube')
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'autoplay',
    description: 'autoplay the playlist',

    async run(bot, message, args) {

        if (!message.member.voice.channel) return message.channel.send("You must be in a vc to use this command.")

        let queue = await bot.distube.getQueue(message)

        if (queue) {

            let mode = bot.distube.toggleAutoplay(message);
            message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");

        } else if (!queue) {
            return
        }


        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag + "\n")

    }
}
