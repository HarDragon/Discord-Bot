module.exports = {
    name: 'clear',
    description: 'clear',

    async run(bot, message, args) {

        number = parseInt(args[0]) + 1
 
        if(message.member.roles.cache.some(role => role.name === 'Leader')) {
            if (!number) {
                return message.reply('Error!')
            } else {
                if (number <= 101) {
                    message.channel.bulkDelete(number);
                } else {
                    message.channel.send(`Do not clear more than 100 messages ${message.author}!!`)
                }
            }
        } else if (message.member.roles.cache.some(role => role.name === 'Mod-1')) {
            if (!number) {
                return message.reply('Error!')
            } else {
                if (number <= 51) {
                    message.channel.bulkDelete(number);
                } else {
                    message.channel.send(`Do not clear more than 50 messages ${message.author}!!`)
                }
            }
        } else if (message.member.roles.cache.some(role => role.name === 'Mod-2') || message.member.roles.cache.some(role => role.name === 'Mod-3')) {
            if (!number) {
                return message.reply('Error!')
            } else {
                if (number <= 11) {
                    message.channel.bulkDelete(number);
                } else {
                    message.channel.send(`Do not clear more than 10 messages ${message.author}!!`)
                }
            }
        }else {
            return message.reply('Error!')
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")

    }
}