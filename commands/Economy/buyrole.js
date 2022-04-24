const db = require("quick.db")

module.exports = {
    name: 'buyrole',
    description: 'buyrole',

    async run(bot, message, args) {

        
        let moneysymbol = "<:MinCurrency:865477832507129876>"

        var roles = ["A rock", "Noob", "Ducky", "Kitten", "Doggo", "Boop", "Panda", "Killer", "Beast Ruler", "Magician", "Nobility", "Ruler of All Lands", "Dragon King", "Clown", "The Shadow", "Gate Keeper", "The Punisher", "Custom Role: Tag Leader"]

        var prices = [`50,000 ${moneysymbol}`, `100,000 ${moneysymbol}`, `250,000 ${moneysymbol}`, `500,000 ${moneysymbol}`, `750,000 ${moneysymbol}`, `1,000,000 ${moneysymbol}`, `1,250,000 ${moneysymbol}`, `1,500,000 ${moneysymbol}`, `1,750,000 ${moneysymbol}`]
        var prices2 = [`2,000,000 ${moneysymbol}`, `2,500,000 ${moneysymbol}`, `2,750,000 ${moneysymbol}`, `4,000,000 ${moneysymbol}`, `5,000,000 ${moneysymbol}`, `7,500,000 ${moneysymbol}`, `10,000,000 ${moneysymbol}`, `15,000,000 ${moneysymbol}`, `25,000,000 ${moneysymbol}`]

        var price = [50000, 100000, 250000, 500000, 750000, 1000000, 1250000, 1500000, 1750000, 2000000, 2500000, 2750000, 4000000, 5000000, 7500000, 10000000, 15000000, 25000000]

        let user = message.author;
        var Economy = new db.table('Economy2')
        
        let bal = await Economy.fetch(`money_${message.guild.id}_${user.id}`);

        var member;

        try {
            member = await message.guild.members.fetch(user)
        } catch (err) {
            member = null;
        }

        let rock = message.guild.roles.cache.find(role => role.name == "A rock")
        let Noob = message.guild.roles.cache.find(role => role.name == "Noob")
        let Ducky = message.guild.roles.cache.find(role => role.name == "Ducky")
        let Kitten = message.guild.roles.cache.find(role => role.name == "Kitten")
        let Doggo = message.guild.roles.cache.find(role => role.name == "Doggo")
        let Boop = message.guild.roles.cache.find(role => role.name == "Boop")
        let Panda = message.guild.roles.cache.find(role => role.name == "Panda")
        let Killer = message.guild.roles.cache.find(role => role.name == "Killer")
        let Beast = message.guild.roles.cache.find(role => role.name == "Beast Ruler")
        let Magic = message.guild.roles.cache.find(role => role.name == "Magician")
        let Nobility = message.guild.roles.cache.find(role => role.name == "Nobility")
        let Ruler = message.guild.roles.cache.find(role => role.name == "Ruler of All Lands")
        let Dragon = message.guild.roles.cache.find(role => role.name == "Dragon King")
        let Clown = message.guild.roles.cache.find(role => role.name == "Clown")
        let Shadow = message.guild.roles.cache.find(role => role.name == "The Shadow")
        let Keeper = message.guild.roles.cache.find(role => role.name == "Gate Keeper")
        let Punisher = message.guild.roles.cache.find(role => role.name == "The Punicher")

        if (args[0] == "1") {

            if (bal >= price[0]) {
                member.roles.add(rock)
                Economy.subtract(`money_${message.guild.id}_${user.id}`, price[0])
                message.reply(`You have successfully purchased the **${roles[0]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[0]}**!! Noob`)
            }

        } else if (args[0] == "2") {

            if (bal >= price[1]) {
                member.roles.add(Noob)
                Economy.subtract(`money_${message.guild.id}_${user.id}`, price[1])
                message.reply(`You have successfully purchased the **${roles[1]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[1]}**!! Noob`)
            }

        } else if (args[0] == "3") {

            if (bal >= price[2]) {
                member.roles.add(Ducky)
                Economy.subtract(`money_${message.guild.id}_${user.id}`, price[2])
                message.reply(`You have successfully purchased the **${roles[2]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[2]}**!! Noob`)
            }

        } else if (args[0] == "4") {

            if (bal >= price[3]) {
                member.roles.add(Kitten)
                Economy.subtract(`money_${message.guild.id}_${user.id}`, price[3])
                message.reply(`You have successfully purchased the **${roles[3]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[3]}**!! Noob`)
            }

        } else if (args[0] == "5") {

            if (bal >= price[4]) {
                member.roles.add(Doggo)
                Economy.subtract(`money_${message.guild.id}_${user.id}`, price[4])
                message.reply(`You have successfully purchased the **${roles[4]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[4]}**!! Noob`)
            }

        } else if (args[0] == "6") {

            if (bal >= price[5]) {
                member.roles.add(Boop)
                Economy.subtract(`money_${message.guild.id}_${user.id}`, price[5])
                message.reply(`You have successfully purchased the **${roles[5]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[5]}**!! Noob`)
            }

        } else if (args[0] == "7") {

            if (bal >= price[6]) {
                member.roles.add(Panda)
                Economy.subtract(`money_${message.guild.id}_${user.id}`, price[6])
                message.reply(`You have successfully purchased the **${roles[6]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[6]}**!! Noob`)
            }

        } else if (args[0] == "8") {

            if (bal >= price[7]) {
                member.roles.add(Killer)
                Economy.subtract(`money_${message.guild.id}_${user.id}`, price[7])
                message.reply(`You have successfully purchased the **${roles[7]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[7]}**!! Noob`)
            }

        } else if (args[0] == "9") {

            if (bal >= price[8]) {
                member.roles.add(Beast)
                Economy.subtract(`money_${message.guild.id}_${user.id}`,price[8])
                message.reply(`You have successfully purchased the **${roles[8]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[8]}**!! Noob`)
            }

        } else if (args[0] == "10") {

            if (bal >= price[9]) {
                member.roles.add(Magic)
                Economy.subtract(`money_${message.guild.id}_${user.id}`,price[9])
                message.reply(`You have successfully purchased the **${roles[9]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[9]}**!! Noob`)
            }

        } else if (args[0] == "11") {

            if (bal >= price[10]) {
                member.roles.add(Nobility)
                Economy.subtract(`money_${message.guild.id}_${user.id}`,price[10])
                message.reply(`You have successfully purchased the **${roles[10]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[10]}**!! Noob`)
            }

        } else if (args[0] == "12") {

            if (bal >= price[11]) {
                member.roles.add(Ruler)
                Economy.subtract(`money_${message.guild.id}_${user.id}`,price[11])
                message.reply(`You have successfully purchased the **${roles[11]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[11]}**!! Noob`)
            }

        } else if (args[0] == "13") {

            if (bal >= price[12]) {
                member.roles.add(Dragon)
                Economy.subtract(`money_${message.guild.id}_${user.id}`,price[12])
                message.reply(`You have successfully purchased the **${roles[12]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[12]}**!! Noob`)
            }

        } else if (args[0] == "14") {

            if (bal >= price[13]) {
                member.roles.add(Clown)
                Economy.subtract(`money_${message.guild.id}_${user.id}`,price[13])
                message.reply(`You have successfully purchased the **${roles[13]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[13]}**!! Noob`)
            }

        } else if (args[0] == "15") {

            if (bal >= price[14]) {
                member.roles.add(Shadow)
                Economy.subtract(`money_${message.guild.id}_${user.id}`,price[14])
                message.reply(`You have successfully purchased the **${roles[14]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[14]}**!! Noob`)
            }

        } else if (args[0] == "16") {

            if (bal >= price[15]) {
                member.roles.add(Keeper)
                Economy.subtract(`money_${message.guild.id}_${user.id}`,price[15])
                message.reply(`You have successfully purchased the **${roles[15]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[15]}**!! Noob`)
            }

        } else if (args[0] == "17") {

            if (bal >= price[16]) {
                member.roles.add(Punisher)
                Economy.subtract(`money_${message.guild.id}_${user.id}`,price[16])
                message.reply(`You have successfully purchased the **${roles[16]}** role!`)
            } else {
                message.reply(`You're too broke to buy **${roles[16]}**!! Noob`)
            }

        } else if (args[0] == "18") {

            if (bal >= price[17]) {
                Economy.subtract(`money_${message.guild.id}_${user.id}`,price[17])
                message.reply(`You have successfully purchased the **${roles[17]}** role!`)
                message.reply(`Please tag the leader to show them  this to get a Custom Role.`)
            } else {
                message.reply(`You're too broke to buy **${roles[17]}**!! Noob`)
            }

        } else {
            message.reply("please specify the number of the roles you would like to buy!")
        }

    }
}
