const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'timeout',

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

        var rawTime = args[1];
        var time = ms(rawTime);
        if (!time) return message.reply(`You didn't specify a time!`)


        var channel = message.guild.channels.cache.find(c => c.name === '『log』')

        var reason = args.splice(2).join(' ');
        if (!reason) return message.reply(`You need to give a reason!`)

        const logtimeout = new MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle("User in Timeout!")
            .addField("User:", user, true)
            .addField("By:", message.author, true)
            .addField("Expires:", rawTime)
            .addField("Reason:", reason)
        channel.send(logtimeout)


        const embed = new MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle("You were put in Timeout!")
            .addField("Expires:", rawTime, true)
            .addField("Reason:", reason, true)
        
        try {
            user.send(embed);
        } catch (err) {
            console.warn(err);
        }

        let mainrole = message.guild.roles.cache.find(role => role.name == "Cutie")
        var role = message.guild.roles.cache.find(r => r.name === 'Time out')

        member.roles.add(role)
        member.roles.remove(mainrole)

        setTimeout(async() => {
            member.roles.remove(role);
            member.roles.add(mainrole)
        }, time);

        const mes = new MessageEmbed()
            .setColor('#00FF00')
            .setDescription(`**${message.mentions.users.first().tag}** has been put in Timeout by **${message.author.tag}** for **${rawTime}**`)
        message.channel.send(mes)

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
        
    }
}