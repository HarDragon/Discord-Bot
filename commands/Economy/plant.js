const db = require("quick.db")
const Discord = require('discord.js');

module.exports = {
    name: 'drop',
    description: 'plant',

    async run(bot, message, args) {

        var Economy = new db.table('Economy')

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        if ((message.author.id === '273185545786544016') && args[0] > 0) {
            message.channel.send(`${message.author} has dropped ${moneysymbolfront}${args[0]}${moneysymbolback}'s`)
            // message.channel.send('https://media0.giphy.com/media/ovWn8N8TVg8hi/giphy.gif')
            message.channel.send("https://thumbs.gfycat.com/WelldocumentedMessyAsianpiedstarling-size_restricted.gif")
            message.channel.send('Type `pick` to steal the money')
            // .then(message => {
            //    message.delete({ timeout: 30000 })
            //})
            let counter = 0;
            let filter = m => m.content.includes('pick')
            let collector = new Discord.MessageCollector(message.channel, filter);


            collector.on('collect', (m, col) => {
                console.log("Collected message: " + m.content);
                counter++
                if (counter === 2) {
                    collector.stop()
                }
            });
            collector.on('end', collected => {
                console.log("Messages collected: " + collected.size);
                console.log(collected.last().author.username);
                // message.channel.bulkDelete(5);
                message.channel.send(`Well done, you got ${collected.last().author}! ${moneysymbolfront}${args[0]}${moneysymbolback}'s have been added.`)
            Economy.add(`${collected.last().author.id}.balance`, args[0])
            });
        } else {
            message.channel.send("sorry this command is not for you ^-^");
        }
    }
}