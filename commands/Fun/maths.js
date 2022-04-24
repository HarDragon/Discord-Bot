const { MessageEmbed } = require('discord.js');
const { create, all } = require('mathjs')
const config = {}
const math = create(all, config)


module.exports = {
  name: 'maths',
  description: 'maths',

  async run(bot, message, args) {

    content = "";

    for (var i = 0; i < args.length; i++) {
        list = args[i];
        // console.log(list)
        content += args[i] + " "
        // console.log(content)
    }

    answer = math.evaluate(content)

    const help = new MessageEmbed()
      .setColor('#FFFFFF')
      .addField('Question',  "```js\n" + content + "=\n```")
      .addField('Answer', "```js\n" + answer + "\n```")
    message.channel.send(help);


  }
}
