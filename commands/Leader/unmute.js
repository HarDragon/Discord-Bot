const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'unmute',
    description: 'untimeout',

    async run(bot, message, args) {

        if (!(message.member.roles.cache.some(role => role.name === 'Leader'))) return message.reply(`you can\'t use that!`)

        var user = message.mentions.members.first()
        if (!user) return message.reply(`you didn\'t mention anyone!`)
        // if (member.roles.cache.some(role => role.name === 'Phoenix Emperor')) return message.reply(`You can't mute this person!`)

        var member;

        try {
            member = await message.guild.members.fetch(user)
        } catch (err) {
            member = null;
        }

        if (!member) return message.reply(`they aren't in the server!`)

        let mainrole = message.guild.roles.cache.find(role => role.name == "Cutie")
        var role = message.guild.roles.cache.find(r => r.name === 'Time out')


        member.roles.remove(role);
        member.roles.add(mainrole)
        
        const mes = new MessageEmbed()
            .setColor('#00FF00')
            .setDescription(`**${user}** has been unmuted by **${message.author}**`)
        message.channel.send(mes)

        
        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
        
    }
}