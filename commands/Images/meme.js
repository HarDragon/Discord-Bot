const fetch = require('node-fetch');
const {MessageEmbed} = require('discord.js');

module.exports = {
    name: 'meme',
    description: 'memes',
    async run(bot, message, args) {

            fetch('https://meme-api.herokuapp.com/gimme/')
            .then(res => res.json())
            .then(json => {
                message.channel.send(json.url)
                console.log("Reddit:" + json.subreddit + " link:" + json.postLink)            
            });

            console.log("\nCommand: " + this.name 
            + "\nServer: " + message.guild.name 
            + "\nChannel: " + message.channel.name 
            + "\nUser: " + message.author.tag + "\n")
    }
}
