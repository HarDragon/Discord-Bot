const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'ping',
    description: 'ping',

    async run(bot, message, args) {
        // const m = await message.channel.send("ping")
        message.channel.send("Calculating ping...").then(resultMessage => {
            ping = resultMessage.createdTimestamp - message.createdTimestamp

            const embed = new MessageEmbed()
                .setColor('#66ff00')
                .setDescription("*" + `🏓 Pong!` + "*")
                .addField('*The Bot Latency is:*', "*" + `${ping}` + " ms" + "*")
                .addField('*The Api Latency is:*', "*" + `${bot.ws.ping}` + " ms" + "*")
            message.channel.send(embed)
        })

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
        
    }
}
