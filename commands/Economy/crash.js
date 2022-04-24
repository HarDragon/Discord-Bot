const db = require("quick.db")
const { MessageEmbed } = require('discord.js');

var list = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,

    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
    2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,

    3.0, 3.1, 3.3, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.0, 3.1, 3.3, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9,
    3.0, 3.1, 3.3, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.0, 3.1, 3.3, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9,
    3.0, 3.1, 3.3, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.0, 3.1, 3.3, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9,
    3.0, 3.1, 3.3, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.0, 3.1, 3.3, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8,

    4.0, 4.1, 4.4, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.0, 4.1, 4.4, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9,
    4.0, 4.1, 4.4, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.0, 4.1, 4.4, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9,
    4.0, 4.1, 4.4, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.0, 4.1, 4.4, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9,
    4.0, 4.1, 4.4, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9,

    5.0, 5.1, 5.5, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.0, 5.1, 5.5, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9,
    5.0, 5.1, 5.5, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.0, 5.1, 5.5, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9,
    5.0, 5.1, 5.5, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.0, 5.1, 5.5, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9,

    6.0, 6.1, 6.6, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 6.0, 6.1, 6.6, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9,
    6.0, 6.1, 6.6, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 6.0, 6.1, 6.6, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9,
    6.0, 6.1, 6.6, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9,

    7.0, 7.1, 7.7, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.0, 7.1, 7.7, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9,
    7.0, 7.1, 7.7, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.0, 7.1, 7.7, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9,

    8.0, 8.1, 8.8, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.0, 8.1, 8.8, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9,
    8.0, 8.1, 8.8, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9,

    9.0, 9.1, 9.9, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 9.0, 9.1, 9.9, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10]

const ingame = new Set();

module.exports = {
    name: 'crash',
    description: 'crash',

    async run(bot, message, args) {

        let moneysymbolfront = ""

        let moneysymbolback = "<:MinCurrency:865477832507129876>"

        amount = Number(args[0]);

        guess = args[1];

        var winningnum = list[Math.floor(Math.random() * list.length)];

        var Economy = new db.table('Economy')

        let user = message.author;

        let bal = await Economy.fetch(`${user.id}.balance`);

        if (!args[0]) {
            message.channel.send(`Please eneter an amount and how high you think the rocket will go, example: $crash 1000 1.5(max 10)`).then(ingame.delete(user.id))
        }
        if (bal < amount + 1 || args[0] % 1 != 0) return message.reply("You are too broke for that.").then(ingame.delete(user.id))
        if (10 <= args[1]) return message.reply("that was not a valid multiplier.").then(ingame.delete(user.id))


        if (!args[1]) return message.reply("Please enter a mutiplier e.g. $crash 1000 1.5(max 10)").then(racerun.delete(user.id))

        start = 0.9

        if (ingame.size == 1) {
            message.channel.send("Ongoing Crash, wait about 10 secs" + `${user}`);
        } else {


            message.channel.send("**Blasting off...**")
                .then(msg => {
                    setTimeout(() => msg.delete(), 6000)
                })

            message.channel.send("https://bet1coin.com/wp-content/uploads/Stake.com-Crash-Game-1.gif")
                .then(msg => {
                    setTimeout(() => msg.delete(), 5000)
                })

            setTimeout(function () {
                message.channel.send("**Crashed to 0!**")
                    .then(msg => {
                        setTimeout(() => msg.delete(), 5000)
                    })
            }, 5500)

            setTimeout(function () {

                if (guess < winningnum) {

                    const win = new MessageEmbed()
                        .setColor("#00000")
                        .setDescription(`**You win! Nice ${guess}x your bet!**\n\nIt was ${winningnum.toFixed(2)}, you win ${moneysymbolfront}${(Number(amount) * guess).toFixed(0)} ${moneysymbolback}!`)
                        .setTimestamp()
                        .setFooter('Noice Win!', 'https://thumbs.gfycat.com/FlippantSpiffyAmericanbadger-small.gif')
                    message.channel.send(win);

                    Economy.add(`${user.id}.balance`, (amount * guess).toFixed(0))
                    Economy.subtract(`${user.id}.balance`, Number(amount))

                } else if (guess > winningnum) {

                    const lose = new MessageEmbed()
                        .setColor("#00000")
                        .setDescription(`**You lost! baibai to ${moneysymbolfront}${amount} ${moneysymbolback}!**\n\nIt was ${winningnum.toFixed(2)}, your guess was too high, you lost ${moneysymbolfront}${Number(amount)} ${moneysymbolback}.`)
                        .setTimestamp()
                        .setFooter('Damn better luck next time', 'https://thumbs.gfycat.com/FlippantSpiffyAmericanbadger-small.gif')
                    message.channel.send(lose);

                    Economy.subtract(`${user.id}.balance`, Number(amount))

                }

            }, 7000);



        }

        // Adds the user to the set so that they can't talk for a minute
        ingame.add(user.id);
        setTimeout(() => {
            // Removes the user from the set after a minute
            ingame.delete(user.id);
        }, 8000);


        console.log("\nCommand: " + this.name
            + "\nServer: " + message.guild.name
            + "\nChannel: " + message.channel.name
            + "\nUser: " + message.author.tag)

    }
}


function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}