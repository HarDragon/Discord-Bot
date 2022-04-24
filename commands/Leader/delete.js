const db = require("quick.db")


module.exports = {
    name: 'del--',
    description: 'deletes',

    async run(bot, message, args) {


        var Economy = new db.table('Economy')

        if (message.author.id === '27317867868784016') {


            // for (let i = 5; i < 11; i++) {

            //     console.log(Economy.all()[i].ID)

            // }

            // Economy.add(`27318587687687016.rtotgames`, 1)
            // Economy.subtract(`273185633177174016.claimreward`, 10000)

            // Economy.delete(Economy.all()[24].ID)
            Economy.delete('748604687687768786')
            // Economy.delete('906691567224492074')
            // console.log(Economy.all())

            message.channel.send("okay deleted")


        } else {

            message.channel.send("This command is not for you ^-^")

        }
        

        console.log(Economy.all())

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
    }
}
