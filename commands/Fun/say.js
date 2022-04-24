const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'say',
    description: 'bot says',
    async run(bot, message, args) {

        chan = args[0]
        channel = bot.channels.cache.get(chan);

        if (message.member.roles.cache.some(role => role.name === 'Phoenix Emperor') || message.member.roles.cache.some(role => role.name === 'Phoenix Empress')) {
            content = "";

            for (var i = 0; i < args.length; i++) {
                list = args[i];
                // console.log(list)
                content += args[i] + " "
                // console.log(content)
            }

            channel.send(`${content.substr(args[0].length, content.length)}`)

            // const say = new MessageEmbed()
            //     .setColor('#FF1493')
            //     .setDescription(`${content.substr(args[0].length, content.length)}`)
            // channel.send(say);

        } else {

            channel.send("*This command does not exist*")

        }

        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag + "\n")

    }
}