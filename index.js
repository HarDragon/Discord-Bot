const Discord = require('discord.js');
const distube = require('distube')
const bot = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');



// For music bot
// Create a new DisTube
bot.distube = new distube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\``
    )) //Requested by: ${song.use}
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added \`${song.name}\` - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))



bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    bot.commands.set(command.name, command);
}

const Eco2commandFiles = fs.readdirSync('./commands/Economy2').filter(file => file.endsWith('.js'));
for (const file of Eco2commandFiles) {
    const command = require(`./commands/Economy2/${file}`)

    bot.commands.set(command.name, command);
}

const EcocommandFiles = fs.readdirSync('./commands/Economy').filter(file => file.endsWith('.js'));
for (const file of EcocommandFiles) {
    const command = require(`./commands/Economy/${file}`)

    bot.commands.set(command.name, command);
}

const FuncommandFiles = fs.readdirSync('./commands/Fun').filter(file => file.endsWith('.js'));
for (const file of FuncommandFiles) {
    const command = require(`./commands/Fun/${file}`)

    bot.commands.set(command.name, command);
}

const ImagecommandFiles = fs.readdirSync('./commands/Images').filter(file => file.endsWith('.js'));
for (const file of ImagecommandFiles) {
    const command = require(`./commands/Images/${file}`)

    bot.commands.set(command.name, command);
}

const LeadercommandFiles = fs.readdirSync('./commands/Leader').filter(file => file.endsWith('.js'));
for (const file of LeadercommandFiles) {
    const command = require(`./commands/Leader/${file}`)

    bot.commands.set(command.name, command);
}

const MusicFiles = fs.readdirSync('./commands/Music').filter(file => file.endsWith('.js'));
for (const file of MusicFiles) {
    const command = require(`./commands/Music/${file}`)

    bot.commands.set(command.name, command);
}


const token = 'Hidden';

const PREFIX = '?';

bot.on('ready', () => {
    console.log('This bot is online!')
    bot.user.setActivity('Tetris.')
})


bot.on('message', async message => {


    if (message) {

        user = message.author

        if (message.author.bot) return;

        // if (user.id === '57987458345748488') return message.channel.send(`You can not use this bot.`);

        if (message.content.match(/my name is/i)) {

            message.channel.send(`${user.username}.. your name is **${user.username}**! -_-`)

        } 
    }


    let args = message.content.substring(PREFIX.length).split(" ");

    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    if (message.author.bot) return;

    switch (args[0].toLowerCase()) {


        case 'invite':
            message.channel.send("https://discord.gg/TUgnjsO")
            break;

    }
})



bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix_${message.guild.id}`);
    if (prefix === null) prefix = PREFIX;

    if (message.content.startsWith(PREFIX)) {
        const args = message.content.slice(PREFIX.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if (!bot.commands.has(command)) return;

        try {
            bot.commands.get(command).run(bot, message, args);

        } catch (error) {
            console.error(error);
        }
    }
})


bot.login(token);
