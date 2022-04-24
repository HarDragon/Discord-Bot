var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
      headless: true,
    },
  });

module.exports = {
    name: 'gif',
    description: 'sends pictures',
    async run(bot, message, args) {

        imagenum = args[0]

        const image_query = "gif" + args.splice(1).join(" ");

        if(!image_query) return message.channel.send('Please enter something to search for.')

        const image_results = await google.scrape(image_query)

        message.channel.send(image_results[imagenum].url)
        
        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")

    }
}
