const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'moji',
    description: 'emoji',

    async run(bot, message, args) {

        let user = message.author

        if (!args[0]) {

            message.channel.send(`What emoji mate? ${user}`);

        } else if (args[0]) {

            if (message.author.bot) return;

            content = "";

            for (var i = 0; i < args.length; i++) {
                list = args[i];
                // console.log(list)
                content += args[i] + " "
                // console.log(content)
            }

            user = message.author;
            const emoji = bot.emojis.cache.find(emoji => emoji.name === args[0]);
            message.channel.send(`${emoji} ${content.substr(args[0].length, content.length)}`)


            // user = message.author;
            // const emoji = bot.emojis.cache.find(emoji => emoji.name === args[0]);
            // message.channel.send(`${emoji} ${boopy}`)

            // const emoji = bot.emojis.cache.get("747886073824149605")

            // message.channel.send(`${emoji}`)



            // var str = message.content;
            // console.log(str)

            // word = str.slice(6);
            // console.log(word)

            // if (str) {
            //     user = message.author;
            //     const emoji = bot.emojis.cache.find(emoji => emoji.name === word);
            //     message.channel.send(`${emoji}`)
            // }

        } else {

            if (message.author.bot) return;

            user = message.author;
            const emoji = bot.emojis.cache.find(emoji => emoji.name === args[0]);
            message.channel.send(`${emoji}}`)

        }
        
        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
        
    }
}