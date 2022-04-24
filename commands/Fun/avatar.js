const { MessageEmbed }= require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'av',
    description: 'avatar',

    async run(bot, message, args) {

        let user = message.mentions.users.first()  || message.author

        message.channel.send(`This is ${user}'s display picture!`);

        message.channel.send(user.displayAvatarURL({ dynamic: true, size: 512}))

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
    }
}