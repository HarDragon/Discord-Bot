const db = require("quick.db")
const ms = require("parse-ms");
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const running = new Set();

module.exports = {
    name: 'guess',
    description: 'random',

    async run(bot, message, args) {

        mutipliers1 = [0.1, 0.5, 0.2, 0.5, 0.25, 0.1, 0.15, 0.3, 0.25]
        mutipliers2 = [1, 1.5, 2, 2, 2.5, 3, 1.25, 1, 1.5, 1.25, 1.25]
        mutipliers3 = [4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 9, 10]
        var random1 = mutipliers1[Math.floor(Math.random() * mutipliers1.length)];
        var random2 = mutipliers1[Math.floor(Math.random() * mutipliers1.length)];
        var random3 = mutipliers1[Math.floor(Math.random() * mutipliers1.length)];
        var random4 = mutipliers1[Math.floor(Math.random() * mutipliers1.length)];
        var random5 = mutipliers1[Math.floor(Math.random() * mutipliers1.length)];
        var random6 = mutipliers1[Math.floor(Math.random() * mutipliers1.length)];
        var random7 = mutipliers2[Math.floor(Math.random() * mutipliers2.length)];
        var random8 = mutipliers2[Math.floor(Math.random() * mutipliers2.length)];
        var random9 = mutipliers3[Math.floor(Math.random() * mutipliers3.length)];
        var random10 = mutipliers1[Math.floor(Math.random() * mutipliers1.length)];
        var prizes = [(args[0]*random1).toFixed(0) ,(args[0]*random2).toFixed(0), (args[0]*random3).toFixed(0), 
        (args[0]*random4).toFixed(0), (args[0]*random5).toFixed(0), (args[0]*random6).toFixed(0), 
        (args[0]*random7).toFixed(0), (args[0]*random8).toFixed(0), (args[0]*random9).toFixed(0), (args[0]*random10).toFixed(0)]

        var pickprize = shuffle(prizes)

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        let user = message.author;
        let timeout = 1000;

        var Economy = new db.table('Economy')

        let bal = await Economy.fetch(`${user.id}.balance`);


        // var random = numbers[Math.floor(Math.random() * numbers.length)];
        // var prize = prizes[Math.floor(Math.random() * prizes.length)];


        let prediction = await Economy.fetch(`${user.id}.predictiontime`);

        if (prediction !== null && timeout - (Date.now() - prediction) > 0) {
            let time = ms(timeout - (Date.now() - prediction));

            const number = new MessageEmbed()
                .setColor("#000000")
                .setDescription("*" + `You've tried guessing ${user.username} try again in ${time.hours}h and ${time.minutes}m and ${time.seconds}s.` + "*")
                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                .setTimestamp()
            message.channel.send(number);

        } else {

            if (running.size == 1) {
                message.channel.send("*" + `Oi you wait! Someone else is trying to win money ${user.username}` + "*");
            } else {

                if(!args[0]) {
                
                    message.channel.send("Please specify an amount to bet.")

                } else if (args[0] && args[0] <= bal && args[0] > 99) {

                    message.channel.send("**" + `Choose a Number ${user.username}` + "**")
                    message.channel.send("`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`")
    
    
                    let counter = 0;
                    const filter = m => m.content.includes(parseInt(m.content))
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
                        console.log("Messages collected: " + collected.size);
                        console.log(collected.last().author.username);
                        console.log(collected.last().content);
    
                        setTimeout(function () {
                            if (collected.last().content) {
                                message.channel.send(`*You picked ${collected.last().content}, check your prize below.*`)
                                message.channel.send(`1 .|| ${moneysymbolfront}${pickprize[0]} ${moneysymbolback}|| 2. || ${moneysymbolfront}${pickprize[1]} ${moneysymbolback}|| 3. || ${moneysymbolfront}${pickprize[2]} ${moneysymbolback} || 4. || ${moneysymbolfront}${pickprize[3]} ${moneysymbolback} || 5. || ${moneysymbolfront}${pickprize[4]} ${moneysymbolback} || 6. || ${moneysymbolfront}${pickprize[5]} ${moneysymbolback} || 7. || ${moneysymbolfront}${pickprize[6]} ${moneysymbolback} || 8. || ${moneysymbolfront}${pickprize[7]} ${moneysymbolback} || 9. || ${moneysymbolfront}${pickprize[8]} ${moneysymbolback}|| 10. || ${moneysymbolfront}${pickprize[9]} ${moneysymbolback}||`)
                                setTimeout(function () {
    
                                    const number = new MessageEmbed()
                                        .setColor("#000000")
                                        .setDescription(`${user.username} you win ${moneysymbolfront}${pickprize[(collected.last().content)-1]} ${moneysymbolback}`)
                                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                                    message.channel.send(number);
                                    Economy.subtract(`${collected.last().author.id}.balance`, args[0])
                                    Economy.add(`${collected.last().author.id}.balance`, pickprize[(collected.last().content)-1]);
                                    Economy.set(`${collected.last().author.id}.predictiontime`, Date.now());
                                }, 3000);
                            } else {
                                message.channel.send("Something went wrong with the guessing.")
                            }
                        }, 2000);
                    });

                } else {

                    message.channel.send("You are not rich enough to afford that or minimum bet is 100.")

                }
            }

            running.add(user.id);
            setTimeout(() => {
                // Removes the user from the set after a minute
                running.delete(user.id);
            }, 10000);

        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag)

    }
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }