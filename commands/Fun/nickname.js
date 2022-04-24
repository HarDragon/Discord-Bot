

module.exports = {
    name: 'name',
    description: 'name',
    async run(bot, message, args) {

        nickname = args[0]
        user = message.author

        if (message.guild.members.cache.get(`${user.id}`).hasPermission("MANAGE_NICKNAMES") && message.guild.members.cache.get(`${user.id}`).hasPermission("CHANGE_NICKNAME")) {
            message.guild.members.cache.get(`${user.id}`).setNickname(nickname);
        } else {
            message.channel.send(`I ${user.username} dont have the permissons to change the nickname yet i still try.`);
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")

    }
}