
module.exports = {
    name: 'co',
    description: 'repeat',
    async run(bot, message, args) {

        num = args[0]
        word = args[1]
        sq = Math.sqrt(num)

        string = [];


        if (!num || !word) {

            message.reply("Please add a square number or the thing you wanna sqaure! ^-^")

        } else {

            if (args[2] == "w") {

                for (let i = 1; i - 1 < num; i++) {

                    if (i == 0 || i == 1) {

                        string += args[1] + "   "

                    } else if (i % sq == 0) {

                        string += args[1] + `\n\n`

                    } else {

                        string += args[1] + "   "

                    }

                }

            } else {

                for (let i = 1; i - 1 < num; i++) {

                    if (i == 0 || i == 1) {

                        string += args[1]

                    } else if (i % sq == 0) {

                        string += args[1] + `\n`

                    } else {

                        string += args[1]

                    }

                }

            }


            if (num / sq == sq && Number.isInteger(sq)) {

                message.channel.send(string)

            } else {

                message.channel.send("That's not a square number.")
            }

        }


        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag + "\n")

    }
}