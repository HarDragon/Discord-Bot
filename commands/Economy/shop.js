const db = require("quick.db")
const Discord = require('discord.js');
const { Client, MessageAttachment, MessageEmbed, GuildMember, MessageReaction } = require('discord.js');

module.exports = {
    name: '---------shop',
    description: 'shop',

    async run(bot, message, args) {
  

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        var roles = ["A rock", "Noob", "Ducky", "Kitten", "Doggo", "Boop", "Panda", "Killer", "Beast Ruler"]
        var roles2 = ["Magician", "Nobility", "Ruler of All Lands", "Dragon King", "Clown", "The Shadow", "Gate Keeper", "The Punisher", "Custom Role: Tag Leader"]

        var price = [`${moneysymbolfront}50,000${moneysymbolback}`, `${moneysymbolfront}100,000${moneysymbolback}`, `${moneysymbolfront}250,000${moneysymbolback}`, `${moneysymbolfront}500,000${moneysymbolback}`, `${moneysymbolfront}750,000${moneysymbolback}`, `${moneysymbolfront}1,000,000${moneysymbolback}`, `${moneysymbolfront}1,250,000${moneysymbolback}`, `${moneysymbolfront}1,500,000${moneysymbolback}`, `${moneysymbolfront}1,750,000${moneysymbolback}`]
        var price2 = [`${moneysymbolfront}2,000,000${moneysymbolback}`, `${moneysymbolfront}2,500,000${moneysymbolback}`, `${moneysymbolfront}2,750,000${moneysymbolback}`, `${moneysymbolfront}4,000,000${moneysymbolback}`, `${moneysymbolfront}5,000,000${moneysymbolback}`, `${moneysymbolfront}7,500,000${moneysymbolback}`, `${moneysymbolfront}10,000,000${moneysymbolback}`, `${moneysymbolfront}15,000,000${moneysymbolback}`, `${moneysymbolfront}25,000,000${moneysymbolback}`]

        if (!args[0]) {
            const shop = new MessageEmbed()
                .setColor('#FF1493')
                .setAuthor(`${message.guild.name} Shop of Roles`)
                .setDescription("Does not yet exist.")
                // .addFields(
                //     { name: `Role #1: ${roles[0]}`, value: `Price: ${price[0]}`, inline: true },
                //     { name: `Role #2: ${roles[1]}`, value: `Price: ${price[1]}`, inline: true },
                //     { name: `Role #3: ${roles[2]}`, value: `Price: ${price[2]}`, inline: true },
                //     { name: `Role #4: ${roles[3]}`, value: `Price: ${price[3]}`, inline: true },
                //     { name: `Role #5: ${roles[4]}`, value: `Price: ${price[4]}`, inline: true },
                //     { name: `Role #6: ${roles[5]}`, value: `Price: ${price[5]}`, inline: true },
                //     { name: `Role #7: ${roles[6]}`, value: `Price: ${price[6]}`, inline: true },
                //     { name: `Role #8: ${roles[7]}`, value: `Price: ${price[7]}`, inline: true },
                //     { name: `Role #9: ${roles[8]}`, value: `Price: ${price[8]}`, inline: true },

                // )
                .setTimestamp()
                .setFooter('Page 1')
            message.channel.send(shop);
            // console.log(content.split("\n"));
        } else if (args[0] == "2") {

            const shop2 = new MessageEmbed()
                .setColor('#FF1493')
                .setAuthor(`${message.guild.name} Shop of Roles`)
                .setDescription("Does not yet exist.")
                // .addFields(
                //     { name: `Role #10: ${roles2[0]}`, value: `Price: ${price2[0]}`, inline: true },
                //     { name: `Role #11: ${roles2[1]}`, value: `Price: ${price2[1]}`, inline: true },
                //     { name: `Role #12: ${roles2[2]}`, value: `Price: ${price2[2]}`, inline: true },
                //     { name: `Role #13: ${roles2[3]}`, value: `Price: ${price2[3]}`, inline: true },
                //     { name: `Role #14: ${roles2[4]}`, value: `Price: ${price2[4]}`, inline: true },
                //     { name: `Role #15: ${roles2[5]}`, value: `Price: ${price2[5]}`, inline: true },
                //     { name: `Role #16: ${roles2[6]}`, value: `Price: ${price2[6]}`, inline: true },
                //     { name: `Role #17: ${roles2[7]}`, value: `Price: ${price2[7]}`, inline: true },
                //     { name: `${roles2[8]}`, value: `Price: ${price2[8]}`, inline: true },
                // )
                .setTimestamp()
                .setFooter('Page 2')
            message.channel.send(shop2);
        }

        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag)
        
    }
}