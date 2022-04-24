const distube = require('distube')
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'q',
    description: 'queue',

    async run(bot, message, args) {

        if (!message.member.voice.channel) return message.channel.send("You must be in a vc to use this command.")

        let queue = bot.distube.getQueue(message)

        if (queue) {
            bot.distube.resume(message)

            const music = new MessageEmbed()
                .setColor('#E50000')
                .setDescription('**Current Queue**:\n\n' + queue.songs.map((song, id) =>
                    `**${id + 1}**. **${song.name}** - \`${song.formattedDuration}\``
                ).join("\n"))
                .setTimestamp()
                .setFooter('Enjoy The Music');
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