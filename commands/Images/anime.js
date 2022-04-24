const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

var animes = ['https://meme-api.herokuapp.com/gimme/Animewallpaper'
    , 'https://meme-api.herokuapp.com/gimme/animereactionimages'
    , 'https://meme-api.herokuapp.com/gimme/Animemes'];


module.exports = {
    name: 'anime',
    description: 'anime',
    async run(bot, message, args) {

        var reddit = animes[Math.floor(Math.random() * animes.length)];

        if (message.channel.id == "747190487022305410" || message.channel.id == "730548545807056916" || message.channel.id == "862087511379279896") {

            fetch(reddit)
                .then(res => res.json())
                .then(json => {
                    message.channel.send(json.url)
                    console.log("Reddit:" + json.subreddit + " link:" + json.postLink)
                    // bot.channels.cache.get('747190487022305410').send(json.url)
                    // bot.channels.cache.get('747190487022305410').send(" Reddit: ||" + json.subreddit + "|" + json.postLink + "||")
                });

        } else {

            message.reply("This command does not work here for certain reasons.")
        }

        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag + "\n")


        const track = new MessageEmbed()
            .setColor('#FFFFFF')
            .setDescription("\n**Command**: " + this.name
                + "\n**Server**: " + message.guild.name
                + "\n**Channel**: " + message.channel.name
                + "\n**User**: " + message.author.tag + "\n")
        bot.channels.cache.get(`753187016430059520`).send(track)



    }
}
