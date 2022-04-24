const db = require("quick.db")
const ms = require("parse-ms");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'rob',
    description: 'rob people',

    async run(bot, message, args) {

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"



        let user = message.author;
        let user2 = message.mentions.users.first()
        var Economy = new db.table('Economy')

        let timeout = 1800000;


        let balance = await Economy.fetch(`${user.id}.balance`);
        let balance2 = await Economy.fetch(`${user2.id}.balance`);

        let bank = await Economy.fetch(`${user.id}.bank`);

        let hourly = await Economy.fetch(`${user.id}.hourly`);

        let robtime = await Economy.fetch(`${user.id}.robtime`);




        colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
            "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"]

        var colour = colours[Math.floor(Math.random() * colours.length)];



        robamount = [0.05 * balance2, 0.075 * balance2, 0.01 * balance2, 0.1 * balance2, 0.15 * balance2, 0.125  * balance2, 0.2 * balance2, 0.25 * balance2, 0.4 * balance2, 500, 1000, 750, 1500, 2500, 10, 5000]

        var robbedamount = robamount[Math.floor(Math.random() * robamount.length)];

        var robbednumber = robbedamount.toFixed(0)

        console.log(robamount)
        console.log(robbedamount)
        console.log(robbednumber)


        robbedoption = [`${user.username} beats up ${user2.username} and steals ${moneysymbolfront}${robbednumber} ${moneysymbolback} from them.`,
        `${user.username} sees ${user2.username}, snatches their wallet and runs off with ${moneysymbolfront}${robbednumber} ${moneysymbolback}.`,
        `${user.username} is spying on ${user2.username}, when they leave their house ${user.username} goes in and robs ${moneysymbolfront}${robbednumber} ${moneysymbolback} from them.`,
        `${user2.username} fell asleep in the park ${user.username} pick pockets a ${moneysymbolfront}${robbednumber} ${moneysymbolback}.`];

        var robbed = robbedoption[Math.floor(Math.random() * robbedoption.length)];



        unrobbedoption = [`${user.username} tried to beats up ${user2.username} but slips and ${user2.username} steals ${moneysymbolfront}${robbednumber} ${moneysymbolback} from their pockets.`,
        `${user.username} scratches ${user2.username} but ${user2.username} swings and knocks them out and grabs ${moneysymbolfront}${robbednumber} ${moneysymbolback} and runs.`,
        `${user.username} goes to pull a gun out to have ${user2.username} on gun point for a robbery. However ${user2.username} gives them a death stare that makes them pee their pants and they run off dropping behind ${moneysymbolfront}${robbednumber} ${moneysymbolback}.`];

        var unrobbed = unrobbedoption[Math.floor(Math.random() * unrobbedoption.length)];



        robwinlose = [robbed, robbed, robbed, robbed, robbed, unrobbed, unrobbed, unrobbed, unrobbed]

        var roboutput = robwinlose[Math.floor(Math.random() * robwinlose.length)];




        if (balance === null) {
            
            balance = Economy.add(`${user.id}.balance`, 0)

            bank = Economy.add(`${user.id}.bank`, 0)

            hourly = Economy.add(`${user.id}.hourly`, 0)

            dailyluck = Economy.add(`${user.id}.dailyluck`, 0)

            prediction = Economy.add(`${user.id}.predictiontime`, 0)

            owned = Economy.push(`${user.id}.owned`, 'Nothing')

            robtime = Economy.add(`${user.id}.robtime`, 0)

            worktime = Economy.add(`${user.id}.worktime`, 0)

            rtotgames = Economy.add(`${user.id}.rtotgames`, 0)

            rsinglenumwins = Economy.add(`${user.id}.rsinglenumwins`, 0)
    
            rotherwins = Economy.add(`${user.id}.rotherwins`, 0)
    
            bjtotgames = Economy.add(`${user.id}.bjtotgames`, 0)
    
            bjgameswon = Economy.add(`${user.id}.bjgameswon`, 0)
    
            bjgameswonbj = Economy.add(`${user.id}.bjgameswonbj`, 0)
    
            setotgames = Economy.add(`${user.id}.setotgames`, 0)
    
            segameswon = Economy.add(`${user.id}.segameswon`, 0)
    
            segameswonse = Economy.add(`${user.id}.segameswonse`, 0)
    
            totalwagered = Economy.add(`${user.id}.totalwagered`, 0)

            claimreward = Economy.add(`${user.id}.claimreward`, 0)

            message.channel.send(`Welcome to Hystogan's Economy ${user}, Spend your money wisley ^-^`)

        } else if (balance2 === null) {

            balance = AlternateEconomy.add(`${user2.id}.balance`, 0)

            bank = AlternateEconomy.add(`${user2.id}.bank`, 0)

            hourly = AlternateEconomy.add(`${user2.id}.hourly`, 0)

            dailyluck = AlternateEconomy.add(`${user2.id}.dailyluck`, 0)

            prediction = AlternateEconomy.add(`${user2.id}.predictiontime`, 0)

            owned = AlternateEconomy.push(`${user2.id}.owned`, 'Nothing')

            robtime = AlternateEconomy.add(`${user2.id}.robtime`, 0)

            worktime = AlternateEconomy.add(`${user2.id}.worktime`, 0)

            rtotgames = AlternateEconomy.add(`${user2.id}.rtotgames`, 0)

            rsinglenumwins = AlternateEconomy.add(`${user2.id}.rsinglenumwins`, 0)
    
            rotherwins = AlternateEconomy.add(`${user2.id}.rotherwins`, 0)
    
            bjtotgames = AlternateEconomy.add(`${user2.id}.bjtotgames`, 0)
    
            bjgameswon = AlternateEconomy.add(`${user2.id}.bjgameswon`, 0)
    
            bjgameswonbj = AlternateEconomy.add(`${user2.id}.bjgameswonbj`, 0)
    
            setotgames = AlternateEconomy.add(`${user2.id}.setotgames`, 0)
    
            segameswon = AlternateEconomy.add(`${user2.id}.segameswon`, 0)
    
            segameswonse = AlternateEconomy.add(`${user2.id}.segameswonse`, 0)
    
            totalwagered = AlternateEconomy.add(`${user2.id}.totalwagered`, 0)

            claimreward = AlternateEconomy.add(`${user2.id}.claimreward`, 0)

            message.channel.send(`Welcome to Hystogan's Economy ${user2}, Spend your money wisley ^-^`)


        } else if (!user2) {

            message.channel.send(`*${user} you must mention someone to rob them.*`)

        } else if (robtime !== null && timeout - (Date.now() - robtime) > 0) {

            let time = ms(timeout - (Date.now() - robtime));

            const number = new MessageEmbed()
                .setColor(colour)
                .setDescription("*" + `You've already tried to rob someone ${user.username} try again in ${time.minutes}m and ${time.seconds}s.` + "*")
                // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                .setTimestamp()
                .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
            message.channel.send(number);

        } else {

            if (roboutput == robbed && balance2 > -50) {

                Economy.add(`${user.id}.balance`, robbednumber);
                Economy.subtract(`${user2.id}.balance`, robbednumber);
                Economy.set(`${user.id}.robtime`, Date.now());
    
    
                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(roboutput)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);
    
    
            } else if (roboutput == unrobbed) {
    
    
                // Economy.add(`${user2.id}.balance`, robbednumber);
                Economy.subtract(`${user.id}.balance`, robbednumber);
                Economy.set(`${user.id}.robtime`, Date.now());
    
    
                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(roboutput)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);
    
            } else {

                Economy.set(`${user.id}.robtime`, Date.now());
    
                const number = new MessageEmbed()
                    .setColor(colour)
                    .setDescription(`*Either they are too broke too rob (can't rob people poorer than -50) or they have put all their money in their bank, too bad.*`)
                    // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                    .setTimestamp()
                    .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                message.channel.send(number);
    
            }
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag)
        
    }
}
