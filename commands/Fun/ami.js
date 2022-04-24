

module.exports = {
    name: 'am',
    description: 'name',
    async run(bot, message, args) {

        //list of username and nickname 
        user = message.author
        member = message.guild.members.cache.get(user.id)

        userArray1 = user.username.toLowerCase().split(" ")

        if (member.nickname == null) {
            userArray2 = [];
        } else {
            userArray2 = member.nickname.toLowerCase().split(" ")
        }

        target = userArray1.concat(userArray2);


        //the args to compare to the actual name, one with caps one without
        content = "";
        content2 = "";

        for (var i = 1; i < args.length; i++) {
            content += args[i].toLowerCase() + " "
            content2 += args[i] + " "
        }

        contentArray = content.split(" ")
        contentArray.pop()
        one = contentArray.join(" ")

        content2Array = content2.split(" ")
        content2Array.pop()
        two = content2Array.join(" ")


        if (args[0] = "i" && one) {

            if (contentArray.every(isin => target.includes(isin))) {
                message.reply(`Yeah im pretty sure you're ${two} dummy.`)
            } else {
                message.reply(`Nah you're not ${content}.. Oi! Are you trying to steal someones identity ಥ_ಥ`)
            }
        } else {
            message.channel.send("Incorrect command.")
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
        
    }
}
