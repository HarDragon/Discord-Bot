const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban',
    async run(bot, message, args) {

        user = message.mentions.users.first();


        if (message.member.roles.cache.some(role => role.name === 'Colonel')) {
            
            if (!args[1]) {

                message.reply("please give a reason.")
    
            } else {
    
                content = "";
    
                for (var i = 0; i < args.length; i++) {
                    list = args[i];
                    // console.log(list)
                    content += args[i] + " "
                    // console.log(content)
                }
    
                const ban = new MessageEmbed()
                    .setColor('	#FF0000')
                    .setDescription(`${user}, The countdown begins now, you will be automacially ban from this server in 60 seconds. Start counting.`)
                    .addField('Reason: ', `${content.substr(args[0].length, content.length)}`)
                message.channel.send(ban);
    
            }

        } else {

            message.reply("You are not powerful enough to execute this command!")

        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
        
    }
}