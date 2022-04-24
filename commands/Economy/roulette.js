const db = require("quick.db")
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'r',
    description: 'roulette',

    async run(bot, message, args) {


        banned = message.author

        if (banned.id === '') return message.channel.send(`You are banned from using this command.`);


        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        amount = args[0];
        var guess = args[1];
        var lost = true;

        red = "🔴"
        black = "⚫"
        green = "🟢"

        var pastnums = new db.table('PastNumbers')

        let pnums = await pastnums.fetch(`PastNumbers`)

        var firstten = pnums.slice(1).slice(-10);

        var reversedten = firstten.reverse();

        var Economy = new db.table('Economy')

        numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]

        var spin = numbers[Math.floor(Math.random() * numbers.length)]

        console.log(spin)

        // var spin = Math.floor(Math.random() * 37);

        let user = message.author;

        let bal = await Economy.fetch(`${user.id}.balance`);

        Economy.add(`${user.id}.rtotgames`, 1)


        words = ["Human", "Genius", "Beast", "Snacc", "Cutie", "Monkee", "Saviour", "Hero"]

        var word = words[Math.floor(Math.random() * words.length)];


        colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
            "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"]

        var colour = colours[Math.floor(Math.random() * colours.length)];

        options = ["low", "high", "1-12", "13-24", "25-36", "1-3", "4-6", "7-9", "10-12", "13-15", "16-18", "19-21", "22-24", "25-27", "28-30", "31-33", "34-36", "even", "odd", "red", "black", "green"]

        numbs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37"]


        if (!args[0]) {
            message.reply("please specify an amount to bet or type rhelp for help.")
        } else if (args[0] == "spin") {

            if (spin === 0 || spin === 37) {
                boop = spin + " " + green

            } else if ([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].indexOf(spin) !== -1) {
                boop = spin + " " + red

            } else if ([2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35].indexOf(spin) !== -1) {
                boop = spin + " " + black
            }

            const rnumbers = new MessageEmbed()
                .setColor("#00000")
                .setDescription(`It landed on ${boop}`)
            message.channel.send(rnumbers);

        } else if (args[0] == "table") {
            message.channel.send("https://media.discordapp.net/attachments/715756034416836688/933402639037784084/Picsart_22-01-19_16-48-43-037.jpg?width=1311&height=630")

        } else if (args[0] > bal || args[0] < 0 || !args[1]) {

            message.reply("please enter a realistic amount to bet ^-^ or bet on something..")

        } else if (options.indexOf(guess) !== -1 || numbs.indexOf(guess) !== -1) {

            if (amount == "all") {

                const pastn = new MessageEmbed()
                    .setColor("#000000")
                    .addField(`***The Past Numbers:***`, reversedten)
                    .setTimestamp()
                message.channel.send(pastn);

                amount = bal;

                Economy.add(`${user.id}.totalwagered`, bal)
                Economy.add(`${user.id}.claimreward`, bal / 1000)

                if (guess == "low") {
                    for (var i = 1; i < 19; i++) {
                        if (spin === i) {
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "high") {
                    for (var i = 19; i < 37; i++) {
                        if (spin === i) {
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "1-12") {
                    for (var i = 1; i < 13; i++) {
                        if (spin === i) {
                            amount = amount * 2
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "13-24") {
                    for (var i = 13; i < 25; i++) {
                        if (spin === i) {
                            amount = amount * 2
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "25-36") {
                    for (var i = 25; i < 37; i++) {
                        if (spin === i) {
                            amount = amount * 2
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == spin) {
                    amount = amount * 35
                    Economy.add(`${user.id}.balance`, amount)
                    Economy.add(`${user.id}.rsinglenumwins`, 1)
                    lost = false;

                } else if (guess == "1-3") {
                    for (var i = 1; i < 4; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "4-6") {
                    for (var i = 4; i < 7; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "7-9") {
                    for (var i = 7; i < 10; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "10-12") {
                    for (var i = 10; i < 13; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "13-15") {
                    for (var i = 13; i < 16; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "16-18") {
                    for (var i = 16; i < 19; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "19-21") {
                    for (var i = 19; i < 22; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "22-24") {
                    for (var i = 22; i < 25; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "25-27") {
                    for (var i = 25; i < 28; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "28-30") {
                    for (var i = 28; i < 31; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "31-33") {
                    for (var i = 31; i < 34; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "34-36") {
                    for (var i = 34; i < 37; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "even") {
                    for (var i = 2; i < 37; i = i + 2) {
                        if (spin === i) {
                            amount = amount
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "odd") {
                    for (var i = 1; i < 36; i = i + 2) {
                        if (spin === i) {
                            amount = amount
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "red") {
                    if ([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].indexOf(spin) !== -1) {
                        amount = amount
                        Economy.add(`${user.id}.balance`, amount)
                        lost = false;
                    }
                } else if (guess == "black") {
                    if ([2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35].indexOf(spin) !== -1) {
                        amount = amount
                        Economy.add(`${user.id}.balance`, amount)
                        lost = false;
                    }
                } else if (guess == "green") {
                    if (spin === 0 || spin === 37) {
                        amount = amount
                        Economy.add(`${user.id}.balance`, amount * 16)
                        lost = false;
                    }
                }

            } else {

                if (isNaN(amount)) return message.reply("please specify an amount to bet, dummy!")

                Economy.add(`${user.id}.totalwagered`, args[0])
                Economy.add(`${user.id}.claimreward`, args[0] / 1000)

                const pastn = new MessageEmbed()
                    .setColor("#000000")
                    .addField(`***The Past Numbers:***`, reversedten)
                    .setTimestamp()
                message.channel.send(pastn);

                if (guess == "low") {
                    for (var i = 1; i < 19; i++) {
                        if (spin === i) {
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "high") {
                    for (var i = 19; i < 37; i++) {
                        if (spin === i) {
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "1-12") {
                    for (var i = 1; i < 13; i++) {
                        if (spin === i) {
                            amount = amount * 2
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "13-24") {
                    for (var i = 13; i < 25; i++) {
                        if (spin === i) {
                            amount = amount * 2
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "25-36") {
                    for (var i = 25; i < 37; i++) {
                        if (spin === i) {
                            amount = amount * 2
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == spin) {
                    amount = amount * 35
                    Economy.add(`${user.id}.balance`, amount)
                    Economy.add(`${user.id}.rsinglenumwins`, 1)
                    lost = false;

                } else if (guess == "1-3") {
                    for (var i = 1; i < 4; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "4-6") {
                    for (var i = 4; i < 7; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "7-9") {
                    for (var i = 7; i < 10; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "10-12") {
                    for (var i = 10; i < 13; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "13-15") {
                    for (var i = 13; i < 16; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "16-18") {
                    for (var i = 16; i < 19; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "19-21") {
                    for (var i = 19; i < 22; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "22-24") {
                    for (var i = 22; i < 25; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "25-27") {
                    for (var i = 25; i < 28; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "28-30") {
                    for (var i = 28; i < 31; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "31-33") {
                    for (var i = 31; i < 34; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "34-36") {
                    for (var i = 34; i < 37; i++) {
                        if (spin === i) {
                            amount = amount * 11
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "even") {
                    for (var i = 2; i < 37; i = i + 2) {
                        if (spin === i) {
                            amount = amount
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "odd") {
                    for (var i = 1; i < 36; i = i + 2) {
                        if (spin === i) {
                            amount = amount
                            Economy.add(`${user.id}.balance`, amount)
                            lost = false;
                        }
                    }
                } else if (guess == "red") {
                    if ([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].indexOf(spin) !== -1) {
                        amount = amount
                        Economy.add(`${user.id}.balance`, amount)
                        lost = false;
                    }
                } else if (guess == "black") {
                    if ([2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35].indexOf(spin) !== -1) {
                        amount = amount
                        Economy.add(`${user.id}.balance`, amount)
                        lost = false;
                    }
                } else if (guess == "green") {
                    if (spin === 0 || spin === 37) {
                        amount = amount * 16
                        Economy.add(`${user.id}.balance`, amount)
                        lost = false;

                    }
                }

            } if (lost) {
                message.channel.send("https://equity.guru/wp-content/uploads/2019/07/roulette.gif").then(msg => {
                    msg.delete({ timeout: 1000 });
                })
                setTimeout(function () {
                    if (spin === 0 || spin === 37) {

                        Economy.subtract(`${user.id}.balance`, amount)

                        message.channel.send(`Oh no ${user}! 🥺 it was ${spin} green, you lost ${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback}.`);

                        let pnums = pastnums.push(`PastNumbers`, `🡺 ${green} ${spin}`)


                    } else if ([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].indexOf(spin) !== -1) {

                        Economy.subtract(`${user.id}.balance`, amount)

                        message.channel.send(`Oh no ${user}! 🥺 it was ${spin} red, you lost ${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback}.`);

                        let pnums = pastnums.push(`PastNumbers`, `🡺 ${red} ${spin}`)


                    } else if ([2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35].indexOf(spin) !== -1) {

                        Economy.subtract(`${user.id}.balance`, amount)

                        message.channel.send(`Oh no ${user}! 🥺 it was ${spin} black, you lost ${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback}.`);

                        let pnums = pastnums.push(`PastNumbers`, `🡺 ${black} ${spin}`)


                    }
                }, 1250);
            } else {
                message.channel.send("https://equity.guru/wp-content/uploads/2019/07/roulette.gif").then(msg => {
                    msg.delete({ timeout: 1000 });
                })
                setTimeout(function () {
                    if ([37, 0].indexOf(spin) !== -1) {

                        if (guess == "green") {
                             message.channel.send(`Yay it's ${spin} green! ${moneysymbolfront}${(amount).toLocaleString()} ${moneysymbolback} has been added your account ${user}.`);
                        } else {
                            message.channel.send(`Yay it's ${spin} green! ${moneysymbolfront}${(amount).toLocaleString()} ${moneysymbolback} has been added your account ${user}.`);
                        }

                        // const number = new MessageEmbed()
                        //     .setColor(colour)
                        //     .setDescription(`yay it's ${spin} ${green}! ${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback} has been added your account ${user.username}.`)
                        //     // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                        //     .setTimestamp()
                        //     .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                        // message.channel.send(number);

                    

                        let pnums = pastnums.push(`PastNumbers`, `🡺 ${green} ${spin}`)
                        Economy.add(`${user.id}.rotherwins`, 1)


                    } else if ([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].indexOf(spin) !== -1) {

                        message.channel.send(`Yay it's ${spin} red! ${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback} has been added your account ${user}.`);

                        let pnums = pastnums.push(`PastNumbers`, `🡺 ${red} ${spin}`)
                        Economy.add(`${user.id}.rotherwins`, 1)


                    } else if ([2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35].indexOf(spin) !== -1) {

                        message.channel.send(`Yay it's ${spin} black! ${moneysymbolfront}${amount.toLocaleString()} ${moneysymbolback} has been added your account ${user}.`);

                        let pnums = pastnums.push(`PastNumbers`, `🡺 ${black} ${spin}`)
                        Economy.add(`${user.id}.rotherwins`, 1)


                    }
                }, 1250);
            }

        } else {

            message.reply("That is not a vaild spot to bet on.")
        }

        if ([37, 0].indexOf(spin) !== -1) {
            boop = spin + green

        } else if ([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].indexOf(spin) !== -1) {
            boop = spin + red

        } else if ([2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35].indexOf(spin) !== -1) {
            boop = spin + black
        }

        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag)

    }
}