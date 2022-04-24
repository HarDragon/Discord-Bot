const distube = require('distube')
const { MessageEmbed } = require('discord.js')



module.exports = {
    name: 'p',
    description: 'play',

    async run(bot, message, args) {
        if (!message.member.voice.channel) return message.channel.send("You must be in a vc to use this command.")

        const music = args.join(" ")

        bot.distube.play(message, music)

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag 
        + "\nSong: " + args + "\n")

    }
}