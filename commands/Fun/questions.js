module.exports = {
    name: 'qn',
    description: 'answers questions',
    async run(bot, message, args) {
        var answer = ballanswers[Math.floor(Math.random() * ballanswers.length)];
        if (args[0].toLowerCase() === 'am') {
            message.channel.send(answer)
        } else {
            if (args[0].toLowerCase() === 'is') {
                message.channel.send(answer)
            } else {
                if (args[0].toLowerCase() === 'should') {
                    message.channel.send(answer)
                } else {
                    if (args[0].toLowerCase() === 'are') {
                        message.channel.send(answer)
                    } else {
                        if (args[0].toLowerCase() === 'do') {
                            message.channel.send(answer)
                        } else {
                            if (args[0].toLowerCase() === 'may') {
                                message.channel.send(answer)
                            } else {
                                if (args[0].toLowerCase() === 'could') {
                                    message.channel.send(answer)
                                } else {
                                    if (args[0].toLowerCase() === 'can') {
                                        message.channel.send(answer)
                                    } else {
                                        if (args[0].toLowerCase() === 'was') {
                                            message.channel.send(answer)
                                        } else {
                                            if (args[0].toLowerCase() === 'will') {
                                                message.channel.send(answer)
                                            } else {
                                                if (args[0].toLowerCase() === 'does') {
                                                    message.channel.send(answer)
                                                } else {
                                                    if (args[0].toLowerCase() === 'did') {
                                                        message.channel.send(answer)
                                                    } else {
                                                        message.channel.send('Sorry! I don\'t understand the question..')
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
    }
}

var ballanswers = ["100%", "I believe so.", "Nahhhh!", "Hystogan knows the answer.", "Ask Elektra..", "Yes", "No", "Yes", "No",
    "Ask again!", "Shoo, im busy!", "Sometimesss", "Maybe?", "No <3", "There is a possibilty", "butthead im a bot, not a magician!",
    "Never!!", "You wish!", "is drax still pooping?", "only God knows", "pffffft nopeee", "Of Course dummy!!", "No wayyy", "No <3", "if its raining where you are then yes ^-^"];