const db = require("quick.db")


module.exports = {
    name: 'buy',
    description: 'buy',

    async run(bot, message, args) {

        
        
        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        var roles = ["Cookie Medal 🍪", "Chocolate Chip"]
        // var roles2 = ["Magician", "Nobility", "Ruler of All Lands", "Dragon King", "Clown", "The Shadow", "Gate Keeper", "The Punisher", "Custom Role: Tag Leader"]

        var prices = [`${moneysymbolfront}1,000,000${moneysymbolback}`, `${moneysymbolfront}5,000,000${moneysymbolback}`]
        // var prices2 = [`${moneysymbolfront}2,000,000${moneysymbolback}`, `${moneysymbolfront}2,500,000${moneysymbolback}`, `${moneysymbolfront}2,750,000${moneysymbolback}`, `${moneysymbolfront}4,000,000${moneysymbolback}`, `${moneysymbolfront}5,000,000${moneysymbolback}`, `${moneysymbolfront}7,500,000${moneysymbolback}`, `${moneysymbolfront}10,000,000${moneysymbolback}`, `${moneysymbolfront}15,000,000${moneysymbolback}`, `${moneysymbolfront}25,000,000${moneysymbolback}`]

        var price = [1000000, 5000000]

        var Economy = new db.table('Economy')

        let user = message.author;

        let bal = await Economy.fetch(`${user.id}.balance`);

        let owned = await Economy.fetch(`${user.id}.owned`);
        

        if (args[0] == "1") {

            if (bal >= price[0]) {

                if (owned[0] == "Nothing") {
                    Economy.delete(`${user.id}.owned`)
                    Economy.push(`${user.id}.owned`, roles[0])
                    Economy.subtract(`${user.id}.balance`, price[0])
                    message.reply(`You have successfully purchased the **${roles[0]}** Item for ${price[0]}!`)
                } else {
                    Economy.push(`${user.id}.owned`, roles[0])
                    Economy.subtract(`${user.id}.balance`, price[0])
                    message.reply(`You have successfully purchased the **${roles[0]}** Item for ${price[0]}!`)
                }

            } else {
                message.reply(`You're too broke to buy **${roles[0]}**!! Noob`)
            }

        } else if (args[0] == "2") {

            if (bal >= price[1]) {

                if (owned[0] == "Nothing") {
                    Economy.delete(`${user.id}.owned`)
                    Economy.push(`${user.id}.owned`, roles[1])
                    Economy.subtract(`${user.id}.balance`, price[1])
                    message.reply(`You have successfully purchased the **${roles[1]}** Item for ${price[1]}!`)
                } else {
                    Economy.push(`${user.id}.owned`, roles[1])
                    Economy.subtract(`${user.id}.balance`, price[1])
                    message.reply(`You have successfully purchased the **${roles[1]}** Item for ${price[1]}!`)
                }

            } else {
                message.reply(`You're too broke to buy **${roles[1]}**!! Noob`)
            }

        // } else if (args[0] == "3") {

        //     if (bal >= price[2]) {
        //         member.roles.add(Ducky)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`, price[2])
        //         message.reply(`You have successfully purchased the **${roles[2]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[2]}**!! Noob`)
        //     }

        // } else if (args[0] == "4") {

        //     if (bal >= price[3]) {
        //         member.roles.add(Kitten)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`, price[3])
        //         message.reply(`You have successfully purchased the **${roles[3]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[3]}**!! Noob`)
        //     }

        // } else if (args[0] == "5") {

        //     if (bal >= price[4]) {
        //         member.roles.add(Doggo)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`, price[4])
        //         message.reply(`You have successfully purchased the **${roles[4]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[4]}**!! Noob`)
        //     }

        // } else if (args[0] == "6") {

        //     if (bal >= price[5]) {
        //         member.roles.add(Boop)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`, price[5])
        //         message.reply(`You have successfully purchased the **${roles[5]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[5]}**!! Noob`)
        //     }

        // } else if (args[0] == "7") {

        //     if (bal >= price[6]) {
        //         member.roles.add(Panda)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`, price[6])
        //         message.reply(`You have successfully purchased the **${roles[6]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[6]}**!! Noob`)
        //     }

        // } else if (args[0] == "8") {

        //     if (bal >= price[7]) {
        //         member.roles.add(Killer)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`, price[7])
        //         message.reply(`You have successfully purchased the **${roles[7]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[7]}**!! Noob`)
        //     }

        // } else if (args[0] == "9") {

        //     if (bal >= price[8]) {
        //         member.roles.add(Beast)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`,price[8])
        //         message.reply(`You have successfully purchased the **${roles[8]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[8]}**!! Noob`)
        //     }

        // } else if (args[0] == "10") {

        //     if (bal >= price[9]) {
        //         member.roles.add(Magic)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`,price[9])
        //         message.reply(`You have successfully purchased the **${roles[9]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[9]}**!! Noob`)
        //     }

        // } else if (args[0] == "11") {

        //     if (bal >= price[10]) {
        //         member.roles.add(Nobility)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`,price[10])
        //         message.reply(`You have successfully purchased the **${roles[10]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[10]}**!! Noob`)
        //     }

        // } else if (args[0] == "12") {

        //     if (bal >= price[11]) {
        //         member.roles.add(Ruler)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`,price[11])
        //         message.reply(`You have successfully purchased the **${roles[11]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[11]}**!! Noob`)
        //     }

        // } else if (args[0] == "13") {

        //     if (bal >= price[12]) {
        //         member.roles.add(Dragon)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`,price[12])
        //         message.reply(`You have successfully purchased the **${roles[12]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[12]}**!! Noob`)
        //     }

        // } else if (args[0] == "14") {

        //     if (bal >= price[13]) {
        //         member.roles.add(Clown)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`,price[13])
        //         message.reply(`You have successfully purchased the **${roles[13]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[13]}**!! Noob`)
        //     }

        // } else if (args[0] == "15") {

        //     if (bal >= price[14]) {
        //         member.roles.add(Shadow)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`,price[14])
        //         message.reply(`You have successfully purchased the **${roles[14]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[14]}**!! Noob`)
        //     }

        // } else if (args[0] == "16") {

        //     if (bal >= price[15]) {
        //         member.roles.add(Keeper)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`,price[15])
        //         message.reply(`You have successfully purchased the **${roles[15]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[15]}**!! Noob`)
        //     }

        // } else if (args[0] == "17") {

        //     if (bal >= price[16]) {
        //         member.roles.add(Punisher)
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`,price[16])
        //         message.reply(`You have successfully purchased the **${roles[16]}** role!`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[16]}**!! Noob`)
        //     }

        // } else if (args[0] == "18") {

        //     if (bal >= price[17]) {
        //         Hystoseco.subtract(`money_${message.guild.id}_${user.id}`,price[17])
        //         message.reply(`You have successfully purchased the **${roles[17]}** role!`)
        //         message.reply(`Please tag the leader to show them  this to get a Custom Role.`)
        //     } else {
        //         message.reply(`You're too broke to buy **${roles[17]}**!! Noob`)
        //     }

        } else {
            message.reply("please specify the number of the roles you would like to buy!")
        }

    }
}
