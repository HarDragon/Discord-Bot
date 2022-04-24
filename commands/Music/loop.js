const distube = require('distube')
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'loop',
    description: 'repeat',

    async run(bot, message, args) {

        if (!message.member.voice.channel) return message.channel.send("You must be in a vc to use this command.")

        let queue = await bot.distube.getQueue(message)

        if (queue) {

            let mode = bot.distube.setRepeatMode(message, parseInt(args[0]));
            mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
            message.channel.send("Set repeat mode to `" + mode + "`");

        } else if (!queue) {
            return
        }


        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag + "\n")

    }
}

