const Discord = require('discord.js');

module.exports = {
    name: 'hey',
    description: 'hey',

    async run(bot, message, args) {

        message.channel.send(`hello ${message.author.username}!`).then(collector1).then(myThinking)

        function myThinking() {
            myVar = setTimeout(Thinking, 3000);
        }

        async function collector1() {

            let counter = 0;
            const filter = m => m.content.includes("how")
            let collector = new Discord.MessageCollector(message.channel, filter);


            collector.on('collect', (m, col) => {
                if (message.author.bot) return;
                console.log("Collected message: " + m.content);
                counter++
                if (counter === 1) {
                    collector.stop()
                }
            });

            collector.on('end', collected => {
                console.log(collected.last().author.username);
                console.log(collected.last().content)
            });
        }

        async function Thinking() {

            await collector1()

            let msg = await message.channel.send("Thinking")

            setTimeout(function () {
                msg.edit("Thinking.")
                setTimeout(function () {
                    msg.edit("Thinking..")
                    setTimeout(function () {
                        msg.edit("Thinking...")
                        setTimeout(function () {
                            msg.edit(`I'm fine, thanks wbu ${message.author.username}!`)
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }

        let counter2 = 0;
        const filter2 = m => m.content.includes("sad")
        let collector2 = new Discord.MessageCollector(message.channel, filter2);


        collector2.on('collect', (m, col) => {
            if (message.author.bot) return;
            console.log("Collected message: " + m.content);
            counter2++
            if (counter2 === 1) {
                collector2.stop()
            }
        });

        collector2.on('end', collected => {
            console.log(collected.last().author.username);
            console.log(collected.last().content);

            message.channel.send(`aww why you sad ${message.author.username}!`)

        });

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")

    }
}