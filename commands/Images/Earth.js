const fetch = require('node-fetch');
const {MessageEmbed} = require('discord.js');

module.exports = {
    name: 'earth',
    description: 'earth',
    async run(bot, message, args) {

            fetch('https://meme-api.herokuapp.com/gimme/EarthPorn')
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