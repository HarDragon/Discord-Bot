module.exports = {
    name: 'v',
    description: 'verify',

    async run(bot, message, args) {

        if (message.channel.id == "751281202773884948") {

            if (message.member.roles.cache.some(role => role.name === 'Leader') || message.member.roles.cache.some(role => role.name === 'Mod-1') || message.member.roles.cache.some(role => role.name === 'Mod-2')) {

                var user = message.mentions.members.first()
                if (!user) return message.reply(`you didn\'t mention anyone!`)

                var member;

                try {
                    member = await message.guild.members.fetch(user)
                } catch (err) {
                    member = null;
                }

                if (!member) return message.reply(`they aren't in the server!`)

                let mainrole = message.guild.roles.cache.find(role => role.name == "Role")
                var role = message.guild.roles.cache.find(r => r.name === 'new')

                member.roles.add(mainrole)
                member.roles.remove(role)

                message.channel.send(`${user} has been verified!`)

            } else {
                message.channel.send("You are not a mod!")
            }

        } else {
            message.reply("This command only works in verification.")
        }


        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag + "\n")

    }
}