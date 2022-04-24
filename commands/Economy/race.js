const fs = require("fs");
const db = require("quick.db")
const Discord = require('discord.js');

dash = "-"

const racerun = new Set();

module.exports = {
    name: 'race',
    description: 'lottery',

    async run(bot, message, args) {

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        let user = message.author;
        var Economy = new db.table('Economy')

        let bal = await Economy.fetch(`${user.id}.balance`);


        num1 = (Math.floor((Math.random() * 10) + 1));
        num2 = (Math.floor((Math.random() * 8) + 1));
        num3 = (Math.floor((Math.random() * 7) + 1));
        num4 = (Math.floor((Math.random() * 6) + 1));
        num5 = (Math.floor((Math.random() * 12) + 1));
        num6 = (Math.floor((Math.random() * 6) + 1));
        num7 = (Math.floor((Math.random() * 9) + 1));
        num8 = (Math.floor((Math.random() * 5) + 1));


        race1 = num1 + num6 + num4 + num8 + num4 + num7 + num5 + num5 + num3 + num1 + num1 + 3
        race2 = num1 + num6 + num7 + num3 + num2 + num1 + num5 + num4 + num8 + num2 + num1 + 3
        race3 = num1 + num1 + num8 + num3 + num2 + num1 + num6 + num4 + num3 + num5 + num5 + 3
        race4 = num6 + num4 + num8 + num5 + num2 + num7 + num7 + num3 + num3 + num4 + num5 + 3

        max = Math.max(race1, race2, race3, race4)


        dash1 = "**┄┄┄┄**"
        dash2 = "**┄┄┄┄┄┄┄┄**"
        dash3 = "**┄┄┄┄┄┄┄┄┄┄┄┄**"
        dash4 = "**┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄**"
        dash5 = "**┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄**"
        dash6 = "**┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄**"
        dash7 = "**┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄**"
        dash8 = "**┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄**"
        dash9 = "**┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄**"
        dash10 = "**┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄**"
        dash11 = "**┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄**"
        dash12 = "**┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄**"

        if (!args[0]) {
            message.channel.send(`Please eneter an amount and what you would like to bet on ${user}, example: $race 10000 turtle`).then(racerun.delete(user.id))
        }
        if (isNaN(args[0])) return message.reply("that was not a valid number.").then(racerun.delete(user.id))

        if (!args[1]) return message.reply("Please bet on someone").then(racerun.delete(user.id))

        else {

            if (args[0] <= bal && args[0] > 1) {

                if (args[1].toLowerCase() === "turtle" || args[1].toLowerCase() === "scorpion" || args[1].toLowerCase() === "dino" || args[1].toLowerCase() === "dolphin") {

                    if (racerun.size == 1) {
                        message.channel.send("Race ongoing, wait until the race is finished before trying again " + `${user}`);
                    } else {

                        let msg = await message.channel.send("`Mr Turtle 🐢`")

                        setTimeout(function () {
                            msg.edit(dash1 + "`🐢`")
                            setTimeout(function () {
                                msg.edit(dash2 + "`🐢`")
                                setTimeout(function () {
                                    msg.edit(dash3 + "`🐢`")
                                    setTimeout(function () {
                                        msg.edit(dash4 + "`🐢`")
                                        setTimeout(function () {
                                            msg.edit(dash5 + "`🐢`")
                                            setTimeout(function () {
                                                msg.edit(dash6 + "`🐢`")
                                                setTimeout(function () {
                                                    msg.edit(dash7 + "`🐢`")
                                                    setTimeout(function () {
                                                        msg.edit(dash8 + "`🐢`")
                                                        setTimeout(function () {
                                                            msg.edit(dash9 + "`🐢`")
                                                            setTimeout(function () {
                                                                msg.edit(dash10 + "`🐢`")
                                                                setTimeout(function () {
                                                                    msg.edit(dash11 + "`🐢`")
                                                                    setTimeout(function () {
                                                                        msg.edit(dash12 + "`🐢`")
                                                                    }, num1 * 1000);
                                                                }, num6 * 1000);
                                                            }, num4 * 1000);
                                                        }, num8 * 1000);
                                                    }, num4 * 1000);
                                                }, num7 * 1000);
                                            }, num5 * 1000);
                                        }, num5 * 1000);
                                    }, num3 * 1000);
                                }, num1 * 1000);
                            }, num1 * 1000);
                        }, 3 * 1000);


                        let msg2 = await message.channel.send("`Mrs scorpion 🦂`")

                        setTimeout(function () {
                            msg2.edit(dash1 + "`🦂`")
                            setTimeout(function () {
                                msg2.edit(dash2 + "`🦂`")
                                setTimeout(function () {
                                    msg2.edit(dash3 + "`🦂`")
                                    setTimeout(function () {
                                        msg2.edit(dash4 + "`🦂`")
                                        setTimeout(function () {
                                            msg2.edit(dash5 + "`🦂`")
                                            setTimeout(function () {
                                                msg2.edit(dash6 + "`🦂`")
                                                setTimeout(function () {
                                                    msg2.edit(dash7 + "`🦂`")
                                                    setTimeout(function () {
                                                        msg2.edit(dash8 + "`🦂`")
                                                        setTimeout(function () {
                                                            msg2.edit(dash9 + "`🦂`")
                                                            setTimeout(function () {
                                                                msg2.edit(dash10 + "`🦂`")
                                                                setTimeout(function () {
                                                                    msg2.edit(dash11 + "`🦂`")
                                                                    setTimeout(function () {
                                                                        msg2.edit(dash12 + "`🦂`")
                                                                    }, num1 * 1000);
                                                                }, num6 * 1000);
                                                            }, num7 * 1000);
                                                        }, num3 * 1000);
                                                    }, num2 * 1000);
                                                }, num1 * 1000);
                                            }, num5 * 1000);
                                        }, num4 * 1000);
                                    }, num8 * 1000);
                                }, num2 * 1000);
                            }, num1 * 1000);
                        }, 3 * 1000);


                        let msg3 = await message.channel.send("`Mr Dino 🦕`")

                        setTimeout(function () {
                            msg3.edit(dash1 + "`🦕`")
                            setTimeout(function () {
                                msg3.edit(dash2 + "`🦕`")
                                setTimeout(function () {
                                    msg3.edit(dash3 + "`🦕`")
                                    setTimeout(function () {
                                        msg3.edit(dash4 + "`🦕`")
                                        setTimeout(function () {
                                            msg3.edit(dash5 + "`🦕`")
                                            setTimeout(function () {
                                                msg3.edit(dash6 + "`🦕`")
                                                setTimeout(function () {
                                                    msg3.edit(dash7 + "`🦕`")
                                                    setTimeout(function () {
                                                        msg3.edit(dash8 + "`🦕`")
                                                        setTimeout(function () {
                                                            msg3.edit(dash9 + "`🦕`")
                                                            setTimeout(function () {
                                                                msg3.edit(dash10 + "`🦕`")
                                                                setTimeout(function () {
                                                                    msg3.edit(dash11 + "`🦕`")
                                                                    setTimeout(function () {
                                                                        msg3.edit(dash12 + "`🦕`")
                                                                    }, num1 * 1000);
                                                                }, num1 * 1000);
                                                            }, num8 * 1000);
                                                        }, num3 * 1000);
                                                    }, num2 * 1000);
                                                }, num1 * 1000);
                                            }, num6 * 1000);
                                        }, num4 * 1000);
                                    }, num3 * 1000);
                                }, num5 * 1000);
                            }, num5 * 1000);
                        }, 3 * 1000);

                        let msg4 = await message.channel.send("`Mrs Dolphin 🐬`")

                        setTimeout(function () {
                            msg4.edit(dash1 + "`🐬`")
                            setTimeout(function () {
                                msg4.edit(dash2 + "`🐬`")
                                setTimeout(function () {
                                    msg4.edit(dash3 + "`🐬`")
                                    setTimeout(function () {
                                        msg4.edit(dash4 + "`🐬`")
                                        setTimeout(function () {
                                            msg4.edit(dash5 + "`🐬`")
                                            setTimeout(function () {
                                                msg4.edit(dash6 + "`🐬`")
                                                setTimeout(function () {
                                                    msg4.edit(dash7 + "`🐬`")
                                                    setTimeout(function () {
                                                        msg4.edit(dash8 + "`🐬`")
                                                        setTimeout(function () {
                                                            msg4.edit(dash9 + "`🐬`")
                                                            setTimeout(function () {
                                                                msg4.edit(dash10 + "`🐬`")
                                                                setTimeout(function () {
                                                                    msg4.edit(dash11 + "`🐬`")
                                                                    setTimeout(function () {
                                                                        msg4.edit(dash12 + "`🐬`")
                                                                    }, num6 * 1000);
                                                                }, num4 * 1000);
                                                            }, num8 * 1000);
                                                        }, num5 * 1000);
                                                    }, num2 * 1000);
                                                }, num7 * 1000);
                                            }, num7 * 1000);
                                        }, num3 * 1000);
                                    }, num3 * 1000);
                                }, num4 * 1000);
                            }, num5 * 1000);
                        }, 3 * 1000);

                        race1 = num1 + num6 + num4 + num8 + num4 + num7 + num5 + num5 + num3 + num1 + num1 + 3
                        race2 = num1 + num6 + num7 + num3 + num2 + num1 + num5 + num4 + num8 + num2 + num1 + 3
                        race3 = num1 + num1 + num8 + num3 + num2 + num1 + num6 + num4 + num3 + num5 + num5 + 3
                        race4 = num6 + num4 + num8 + num5 + num2 + num7 + num7 + num3 + num3 + num4 + num5 + 3

                        max = Math.max(race1, race2, race3, race4)
                        min = Math.min(race1, race2, race3, race4)

                        setTimeout(function () {
                            message.channel.send("`Mr Turtle 🐢`: **" + race1 + " seconds" + "**")
                            message.channel.send("`Mrs scorpion 🦂`: **" + race2 + " seconds" + "**")
                            message.channel.send("`Mr Dino 🦕`: **" + race3 + " seconds" + "**")
                            message.channel.send("`Mrs Dolphin 🐬`: **" + race4 + " seconds" + "**")
                        }, (max + 5) * 1000);

                        setTimeout(function () {
                            if (min == race1) {
                                message.channel.send("**" + "The winner is `Mr Turtle 🐢`!" + "**")
                            } else if (min == race2) {
                                message.channel.send("**" + "The winner is `Mrs scorpion 🦂`!" + "**")
                            } else if (min == race3) {
                                message.channel.send("**" + "The winner is `Mr Dino 🦕`!" + "**")
                            } else if (min == race4) {
                                message.channel.send("**" + "The winner is `Mrs Dolphin 🐬`!" + "**")
                            }
                        }, (max + 7) * 1000);

                        setTimeout(function () {
                            if (args[1].toLowerCase() === "turtle" && min === race1) {
                                message.channel.send(`Well done! ${user} You were right! ${moneysymbolfront}${(args[0] * 2.5).toLocaleString()} ${moneysymbolback} have been added to your account.`)
                                Economy.subtract(`${user.id}.balance`, args[0])
                                Economy.add(`${user.id}.balance`, args[0] * 2.5)
                            } else if (args[1].toLowerCase() === "scopion" && min == race2) {
                                message.channel.send(`Well done! ${user} You were right! ${moneysymbolfront}${(args[0] * 2.5).toLocaleString()} ${moneysymbolback} have been added to your account.`)
                                Economy.subtract(`${user.id}.balance`, args[0])
                                Economy.add(`${user.id}.balance`, args[0] * 2.5)
                            } else if (args[1].toLowerCase() === "dino" && min == race3) {
                                message.channel.send(`Well done! ${user} You were right! ${moneysymbolfront}${(args[0] * 2.5).toLocaleString()} ${moneysymbolback} have been added to your account.`)
                                Economy.subtract(`${user.id}.balance`, args[0])
                                Economy.add(`${user.id}.balance`, args[0] * 2.5)
                            } else if (args[1].toLowerCase() === "dolphin" && min == race4) {
                                message.channel.send(`Well done! ${user} You were right! ${moneysymbolfront}${(args[0] * 2.5).toLocaleString()} ${moneysymbolback} have been added to your account.`)
                                Economy.subtract(`${user.id}.balance`, args[0])
                                Economy.add(`${user.id}.balance`, args[0] * 2.5)
                            } else {
                                message.channel.send(`Damn! ${user} You were wrong! you lost ${moneysymbolfront}${args[0].toLocaleString()} ${moneysymbolback} Better luck next time.`)
                                Economy.subtract(`${user.id}.balance`, args[0])
                            }
                        }, (max + 7) * 1000);
                    }
                    // Adds the user to the set so that they can't talk for a minute
                    racerun.add(user.id);
                    setTimeout(() => {
                        // Removes the user from the set after a minute
                        racerun.delete(user.id);
                    }, (max + 7) * 1000);
                } else {
                    message.channel.send("Please bet on Turtle, scorpion, dino or dolphin ^-^")
                }

            } else {
                message.channel.send("You are too broke to bet that amount LMAO nooob!")
            }
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag)
    }
}


