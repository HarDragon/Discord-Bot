const fs = require("fs");
const db = require("quick.db")
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'bal',
    description: 'balance',

    async run(bot, message, args) {


        banned = message.author

        if (banned.id === '') return message.channel.send(`You are banned from using this command.`);




        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        // ${moneysymbolfront} ${moneysymbolback}


        colours = ["#FFF700", "#FF007C", "#00CCCC"]

        var colour = colours[Math.floor(Math.random() * colours.length)];





        let user = message.mentions.users.first() || message.author;
        var Economy = new db.table('Economy')

        let balanceclean = await Economy.fetch(`${user.id}.balance`)

        let bankclean = await Economy.fetch(`${user.id}.bank`)

        let balance = await Economy.fetch(`${user.id}.balance`)

        let bank = await Economy.fetch(`${user.id}.bank`)

        let hourly = await Economy.fetch(`${user.id}.hourly`);

        let dailyluck = await Economy.fetch(`${user.id}.dailyluck`);

        let prediction = await Economy.fetch(`${user.id}.predictiontime`);

        let owned = await Economy.fetch(`${user.id}.owned`);

        let robtime = await Economy.fetch(`${user.id}.robtime`);

        let worktime = await Economy.fetch(`${user.id}.worktime`);

        let rtotgames = await Economy.fetch(`${user.id}.rtotgames`);

        let rsinglenumwins = await Economy.fetch(`${user.id}.rsinglenumwins`);

        let rotherwins = await Economy.fetch(`${user.id}.rotherwins`);

        let bjtotgames = await Economy.fetch(`${user.id}.bjtotgames`);

        let bjgameswon = await Economy.fetch(`${user.id}.bjgameswon`);

        let bjgameswonbj = await Economy.fetch(`${user.id}.bjgameswonbj`);

        let setotgames = await Economy.fetch(`${user.id}.setotgames`);

        let segameswon = await Economy.fetch(`${user.id}.segameswon`);

        let segameswonse = await Economy.fetch(`${user.id}.segameswonse`);

        let totalwagered = await Economy.fetch(`${user.id}.totalwagered`);

        let claimreward = await Economy.fetch(`${user.id}.claimreward`);




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

        } else if (args[0] == "stats") {

            let balance = await Economy.fetch(`${user.id}.balance`).toLocaleString()

            let bank = await Economy.fetch(`${user.id}.bank`).toLocaleString()

            let rtotgames = await Economy.fetch(`${user.id}.rtotgames`).toLocaleString()

            let rsinglenumwins = await Economy.fetch(`${user.id}.rsinglenumwins`).toLocaleString()
    
            let rotherwins = await Economy.fetch(`${user.id}.rotherwins`).toLocaleString()
    
            let bjtotgames = await Economy.fetch(`${user.id}.bjtotgames`).toLocaleString()
    
            let bjgameswon = await Economy.fetch(`${user.id}.bjgameswon`).toLocaleString()
    
            let bjgameswonbj = await Economy.fetch(`${user.id}.bjgameswonbj`).toLocaleString()
    
            let setotgames = await Economy.fetch(`${user.id}.setotgames`).toLocaleString()
    
            let segameswon = await Economy.fetch(`${user.id}.segameswon`).toLocaleString()
    
            let segameswonse = await Economy.fetch(`${user.id}.segameswonse`).toLocaleString()
    
            let totalwagered = await Economy.fetch(`${user.id}.totalwagered`).toLocaleString()
    
            let claimreward = await Economy.fetch(`${user.id}.claimreward`).toLocaleString()

            

            cashmoney = `${moneysymbolfront}${balance} ${moneysymbolback}`

            bankmoney = `${moneysymbolfront}${bank} ${moneysymbolback}`

            networth = balanceclean + bankclean

            net = networth.toLocaleString()


            const number = new MessageEmbed()
                .setColor("#000000")
                // .setAuthor(`${user.username}`, user.displayAvatarURL())
                .setDescription(`**The Current Stats ${user.username}:**`)
                .addFields(
                    { name: 'Money:', value: cashmoney, inline: true },
                    { name: 'Bank:', value: bankmoney, inline: true },
                )
                .addField('Game\'s Stats:', `━━━━━━━━━━━━━━`)
                .addFields(
                    { name: 'Roulette:', value: `**Games Played:**\n${rtotgames}\n**Single Number Wins:**\n${rsinglenumwins}\n**Other Wins:**\n${rotherwins - rsinglenumwins}`, inline: true },
                    { name: 'Blackjack:', value: `**Games Played:**\n${bjtotgames}\n**Games Won:**\n${bjgameswon}\n**Games Won with BJ:**\n${bjgameswonbj}`, inline: true },
                    { name: 'Snake Eye:', value: `**Games Played:**\n${setotgames}\n**Games Won:**\n${segameswon}\n**Snake Eyes:**\n${segameswonse}`, inline: true },
                )
                .addField(`Total Money Wagered: ${totalwagered}`, `━━━━━━━━━━━━━━`)
                .addField(`Prize To Be Claimed: ${claimreward}`, `━━━━━━━━━━━━━━`)
                // .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                .setThumbnail(user.displayAvatarURL())
            message.channel.send(number);


        } else {

            let balance = await Economy.fetch(`${user.id}.balance`).toLocaleString()

            let bank = await Economy.fetch(`${user.id}.bank`).toLocaleString()

            

            cashmoney = `${moneysymbolfront}${balance} ${moneysymbolback}`

            bankmoney = `${moneysymbolfront}${bank} ${moneysymbolback}`

            networth = balanceclean + bankclean

            net = networth.toLocaleString()


            const number = new MessageEmbed()
                .setColor("#000000")
                // .setAuthor(`${user.username}`, user.displayAvatarURL())
                .setDescription(`**The Current Stats ${user.username}:**`)
                .addFields(
                    { name: 'Money:', value: cashmoney, inline: true },
                    { name: 'Bank:', value: bankmoney, inline: true },
                )
                .addField(`Total Money Wagered: ${totalwagered.toLocaleString()}`, `━━━━━━━━━━━━━━`)
                .addField(`Prize To Be Claimed: ${claimreward.toLocaleString()}`, `━━━━━━━━━━━━━━`)
                // .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                .setThumbnail(user.displayAvatarURL())
            message.channel.send(number);


        }

        // console.log(Economy.all())

        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag + "\n")
    }
}