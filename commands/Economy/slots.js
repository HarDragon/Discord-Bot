const db = require("quick.db")
const ms = require("parse-ms");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'slots',
    description: 'slots',

    async run(bot, message, args) {

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"


        let slots = ["🍌", "🍒", "🥝", "🍊", "🍇", "🍓", "🍟", "🍕", "🍔", "💰"];

        let moneyslots = ["💰"];

        let fruit = ["🍌", "🍒", "🥝", "🍊", "🍇", "🍓"];

        let fastfood = ["🍟", "🍕", "🍔"];

        var amount = args[0]



        let user = message.author;
        var Economy = new db.table('Economy')

        let bal = await Economy.fetch(`${user.id}.balance`);



        let result = Math.floor((Math.random() * moneyslots.length));

        let row1result1 = Math.floor((Math.random() * slots.length));
        let row1result2 = Math.floor((Math.random() * slots.length));
        let row1result3 = Math.floor((Math.random() * slots.length));

        let row2result1 = Math.floor((Math.random() * slots.length));
        let row2result2 = Math.floor((Math.random() * slots.length));
        let row2result3 = Math.floor((Math.random() * slots.length));

        let row3result1 = Math.floor((Math.random() * slots.length));
        let row3result2 = Math.floor((Math.random() * slots.length));
        let row3result3 = Math.floor((Math.random() * slots.length));



        let row1result1_2 = Math.floor((Math.random() * slots.length));
        let row1result2_2 = Math.floor((Math.random() * slots.length));
        let row1result3_2 = Math.floor((Math.random() * slots.length));

        let row2result1_2 = Math.floor((Math.random() * slots.length));
        let row2result2_2 = Math.floor((Math.random() * slots.length));
        let row2result3_2 = Math.floor((Math.random() * slots.length));

        let row3result1_2 = Math.floor((Math.random() * slots.length));
        let row3result2_2 = Math.floor((Math.random() * slots.length));
        let row3result3_2 = Math.floor((Math.random() * slots.length));



        let row1result1_3 = Math.floor((Math.random() * slots.length));
        let row1result2_3 = Math.floor((Math.random() * slots.length));
        let row1result3_3 = Math.floor((Math.random() * slots.length));

        let row2result1_3 = Math.floor((Math.random() * slots.length));
        let row2result2_3 = Math.floor((Math.random() * slots.length));
        let row2result3_3 = Math.floor((Math.random() * slots.length));

        let row3result1_3 = Math.floor((Math.random() * slots.length));
        let row3result2_3 = Math.floor((Math.random() * slots.length));
        let row3result3_3 = Math.floor((Math.random() * slots.length));


        words = ["Human", "Genius", "Beast", "Snacc", "Cutie", "Monkee", "Saviour", "Hero"]

        var word = words[Math.floor(Math.random() * words.length)];


        colours = ["#FF1493", "#FFFF00", "#4CBB17", "#ff0000", "#000000", "#00C5CD", "#FF4500",
            "#FF9AA2", " #FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", " #C7CEEA"]

        var colour = colours[Math.floor(Math.random() * colours.length)];


        if (!amount) {

            if (row2result1_3 === row2result2_3 && row2result1_3 === row2result3_3) {

                message.channel.send("**Spinning**")
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`**Spinning.**`);
                            setTimeout(function () {
                                msg.edit(`**Spinning..**`)
                                setTimeout(function () {
                                    msg.edit(`**Spinning...**`)
                                    setTimeout(function () {
                                        msg.edit(`**And the outcome is...**`)
                                    }, 1000);
                                }, 1000);
                            }, 500);
                        }, 500)
                    });

                message.channel.send(`\n┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1]}        ${slots[row3result2]}        ${slots[row3result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛\n`)
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                            setTimeout(function () {
                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                setTimeout(function () {
                                    msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                    setTimeout(function () {
                                        msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                        setTimeout(function () {
                                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                            setTimeout(function () {
                                                msg.edit(`\n┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_3]}        ${slots[row3result2_3]}        ${slots[row3result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛\n`);
                                                setTimeout(function () {
                                                    message.channel.send("**Well Done! You won!**");
                                                }, 5000)
                                            }, 500)
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    });

            } else {

                message.channel.send("**Spinning**")
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`**Spinning.**`);
                            setTimeout(function () {
                                msg.edit(`**Spinning..**`)
                                setTimeout(function () {
                                    msg.edit(`**Spinning...**`)
                                    setTimeout(function () {
                                        msg.edit(`**And the outcome is...**`)
                                    }, 1000);
                                }, 1000);
                            }, 500);
                        }, 500)
                    });

                message.channel.send(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1]}        ${slots[row3result2]}        ${slots[row3result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                            setTimeout(function () {
                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                setTimeout(function () {
                                    msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                    setTimeout(function () {
                                        msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                        setTimeout(function () {
                                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                            setTimeout(function () {
                                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_3]}        ${slots[row3result2_3]}        ${slots[row3result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                                setTimeout(function () {
                                                    message.channel.send("**You lost that one.. ^-^  oopsie**");
                                                }, 5000)
                                            }, 500)
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    });
            }

        } else if (amount > 1 && amount <= bal)


            if (row2result1_3 === row2result2_3 && row2result1_3 === row2result3_3 && row2result1_3 == result) {

                message.channel.send("**Spinning**")
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`**Spinning.**`);
                            setTimeout(function () {
                                msg.edit(`**Spinning..**`)
                                setTimeout(function () {
                                    msg.edit(`**Spinning...**`)
                                    setTimeout(function () {
                                        msg.edit(`**And the outcome is...**`)
                                    }, 1000);
                                }, 1000);
                            }, 500);
                        }, 500)
                    });

                message.channel.send(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1]}        ${slots[row3result2]}        ${slots[row3result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                            setTimeout(function () {
                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                setTimeout(function () {
                                    msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                    setTimeout(function () {
                                        msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                        setTimeout(function () {
                                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                            setTimeout(function () {
                                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_3]}        ${slots[row3result2_3]}        ${slots[row3result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                                setTimeout(function () {
                                                    const number = new MessageEmbed()
                                                        .setColor(colour)
                                                        .setDescription("`" + `🎊 Well Done ${user.username}! You won THE JACKPOT! Thats ${moneysymbolfront}${(amount * 25)} ${moneysymbolback}! 🎊`)
                                                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                                                        .setTimestamp()
                                                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                                                    message.channel.send(number);
                                                    Economy.add(`${user.id}.balance`, amount * 25)
                                                    Economy.subtract(`${user.id}.balance`, amount)
                                                }, 5000)
                                            }, 500)
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    });


            } else if (row2result1_3 === row2result2_3 && row2result1_3 === row2result3_3) {

                message.channel.send("**Spinning**")
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`**Spinning.**`);
                            setTimeout(function () {
                                msg.edit(`**Spinning..**`)
                                setTimeout(function () {
                                    msg.edit(`**Spinning...**`)
                                    setTimeout(function () {
                                        msg.edit(`**And the outcome is...**`)
                                    }, 1000);
                                }, 1000);
                            }, 500);
                        }, 500)
                    });

                message.channel.send(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1]}        ${slots[row3result2]}        ${slots[row3result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                            setTimeout(function () {
                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                setTimeout(function () {
                                    msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                    setTimeout(function () {
                                        msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                        setTimeout(function () {
                                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                            setTimeout(function () {
                                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_3]}        ${slots[row3result2_3]}        ${slots[row3result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                                setTimeout(function () {
                                                    const number = new MessageEmbed()
                                                        .setColor(colour)
                                                        .setDescription("`" + `Niceeee ${user.username}! You won ${moneysymbolfront}${(amount * 10)} ${moneysymbolback}!`)
                                                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                                                        .setTimestamp()
                                                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                                                    message.channel.send(number);
                                                    Economy.add(`${user.id}.balance`, amount * 10)
                                                    Economy.subtract(`${user.id}.balance`, amount)
                                                }, 5000)
                                            }, 500)
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    });


            } else if (row2result1_3 === row2result2_3) {

                message.channel.send("**Spinning**")
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`**Spinning.**`);
                            setTimeout(function () {
                                msg.edit(`**Spinning..**`)
                                setTimeout(function () {
                                    msg.edit(`**Spinning...**`)
                                    setTimeout(function () {
                                        msg.edit(`**And the outcome is...**`)
                                    }, 1000);
                                }, 1000);
                            }, 500);
                        }, 500)
                    });

                message.channel.send(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1]}        ${slots[row3result2]}        ${slots[row3result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                            setTimeout(function () {
                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                setTimeout(function () {
                                    msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                    setTimeout(function () {
                                        msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                        setTimeout(function () {
                                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                            setTimeout(function () {
                                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_3]}        ${slots[row3result2_3]}        ${slots[row3result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                                setTimeout(function () {
                                                    const number = new MessageEmbed()
                                                        .setColor(colour)
                                                        .setDescription(`Matched 2 ${user.username}! You won ${moneysymbolfront}${(amount * 5)} ${moneysymbolback}!`)
                                                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                                                        .setTimestamp()
                                                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                                                    message.channel.send(number);
                                                    Economy.add(`${user.id}.balance`, amount * 5)
                                                    Economy.subtract(`${user.id}.balance`, amount)
                                                }, 5000)
                                            }, 500)
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    });

            } else if (fruit.includes(slots[row2result1_3]) && fruit.includes(slots[row2result2_3]) && fruit.includes(slots[row2result3_3])) {

                message.channel.send("**Spinning**")
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`**Spinning.**`);
                            setTimeout(function () {
                                msg.edit(`**Spinning..**`)
                                setTimeout(function () {
                                    msg.edit(`**Spinning...**`)
                                    setTimeout(function () {
                                        msg.edit(`**And the outcome is...**`)
                                    }, 1000);
                                }, 1000);
                            }, 500);
                        }, 500)
                    });

                message.channel.send(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1]}        ${slots[row3result2]}        ${slots[row3result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                            setTimeout(function () {
                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                setTimeout(function () {
                                    msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                    setTimeout(function () {
                                        msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                        setTimeout(function () {
                                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                            setTimeout(function () {
                                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_3]}        ${slots[row3result2_3]}        ${slots[row3result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                                setTimeout(function () {
                                                    const number = new MessageEmbed()
                                                        .setColor(colour)
                                                        .setDescription(`Matched 3 fruits ${user.username}! You won ${moneysymbolfront}${amount} ${moneysymbolback}!`)
                                                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                                                        .setTimestamp()
                                                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                                                    message.channel.send(number);
                                                    Economy.add(`${user.id}.balance`, amount)
                                                    Economy.subtract(`${user.id}.balance`, amount)
                                                }, 5000)
                                            }, 500)
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    });

            } else if (fastfood.includes(slots[row2result1_3]) && fastfood.includes(slots[row2result2_3]) && fastfood.includes(slots[row2result3_3])) {

                message.channel.send("**Spinning**")
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`**Spinning.**`);
                            setTimeout(function () {
                                msg.edit(`**Spinning..**`)
                                setTimeout(function () {
                                    msg.edit(`**Spinning...**`)
                                    setTimeout(function () {
                                        msg.edit(`**And the outcome is...**`)
                                    }, 1000);
                                }, 1000);
                            }, 500);
                        }, 500)
                    });

                message.channel.send(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1]}        ${slots[row3result2]}        ${slots[row3result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                            setTimeout(function () {
                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                setTimeout(function () {
                                    msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                    setTimeout(function () {
                                        msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                        setTimeout(function () {
                                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                            setTimeout(function () {
                                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_3]}        ${slots[row3result2_3]}        ${slots[row3result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                                setTimeout(function () {
                                                    const number = new MessageEmbed()
                                                        .setColor(colour)
                                                        .setDescription(`Matched 3 fast foods ${user.username}! You won ${moneysymbolfront}${amount * 2} ${moneysymbolback}!`)
                                                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                                                        .setTimestamp()
                                                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                                                    message.channel.send(number);
                                                    Economy.add(`${user.id}.balance`, amount * 2)
                                                    Economy.subtract(`${user.id}.balance`, amount)
                                                }, 5000)
                                            }, 500)
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    });

            } else {

                message.channel.send("**Spinning**")
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`**Spinning.**`);
                            setTimeout(function () {
                                msg.edit(`**Spinning..**`)
                                setTimeout(function () {
                                    msg.edit(`**Spinning...**`)
                                    setTimeout(function () {
                                        msg.edit(`**And the outcome is...**`)
                                    }, 1000);
                                }, 1000);
                            }, 500);
                        }, 500)
                    });

                message.channel.send(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1]}        ${slots[row3result2]}        ${slots[row3result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                    .then((msg) => {
                        setTimeout(function () {
                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1]}        ${slots[row2result2]}        ${slots[row2result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`)
                            setTimeout(function () {
                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1]}        ${slots[row1result2]}        ${slots[row1result3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                setTimeout(function () {
                                    msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_2]}        ${slots[row1result2_2]}        ${slots[row1result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                    setTimeout(function () {
                                        msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row2result1_2]}        ${slots[row2result2_2]}        ${slots[row2result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                        setTimeout(function () {
                                            msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row3result1_2]}        ${slots[row3result2_2]}        ${slots[row3result3_2]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                            setTimeout(function () {
                                                msg.edit(`┏ ‐╌╌╌╌╌╌╌‐ ┓\n┃ ${slots[row3result1_3]}        ${slots[row3result2_3]}        ${slots[row3result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃\n┃ ${slots[row2result1_3]}        ${slots[row2result2_3]}        ${slots[row2result3_3]} ┃ \n┃ ‐╌╌╌╌╌╌╌‐ ┃ \n┃ ${slots[row1result1_3]}        ${slots[row1result2_3]}        ${slots[row1result3_3]} ┃ \n┗ ‐╌╌╌╌╌╌╌‐ ┛`);
                                                setTimeout(function () {
                                                    const number = new MessageEmbed()
                                                        .setColor(colour)
                                                        .setDescription(`Awww ${user.username}, You lost ${moneysymbolfront}${amount} ${moneysymbolback}.. ^-^  oopsie`)
                                                        // .setImage("https://media.discordapp.net/attachments/588373428247986185/803116216100716574/rainbow.gif")
                                                        .setTimestamp()
                                                        .setFooter(`${user.username} The ${word}`, user.displayAvatarURL())
                                                    message.channel.send(number);
                                                    Economy.subtract(`${user.id}.balance`, amount)
                                                    Economy.subtract(`${user.id}.balance`, amount)

                                                }, 5000)
                                            }, 500)
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    });
            }

            console.log("\nCommand: " + this.name 
            + "\nServer: " + message.guild.name 
            + "\nChannel: " + message.channel.name 
            + "\nUser: " + message.author.tag)
    }
}