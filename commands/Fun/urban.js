const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const urban = require('relevant-urban');

module.exports = {
    name: 'def',
    description: 'definition',

    async run(bot, message, args) {

        if (!args[0]) return message.channel.send("Please enter a word to define o-o")

        let result = await urban(args[0]).catch( e => {
            return message.channel.send(`Unknown word phrase of ''${args[0]}'' o.o um please try again.`)
        })

        const embed = new MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle(result.word)
            .setURL(result.urbanURL)
            .setDescription(`**Definition**: \n${result.definition}  \n\n**Example**: \n${result.example}`)
            .addField("Author:", result.author, true)
            .addField("Rating", `👍 ${result.thumbsUp.toLocaleString()} | 👎 ${result.thumbsDown.toLocaleString()}`)
            .setTimestamp()
            .setFooter('Hystogan\'s Dictionary')

            if (result.tags.length > 0 && result.tags.join(" ").length < 1024){
                embed.addField("Tags", result.tags.join(", "), true)
            }
        message.channel.send(embed);

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
    }
}
