module.exports = {
  name: 're',
  description: 'test',

  async run(bot, message, args) {

    user = message.author.username
    let n = args[0];

    if (n < 6) {
      answer = test(n)
      message.channel.send(answer)
    }

    console.log("\nCommand: " + this.name 
    + "\nServer: " + message.guild.name 
    + "\nChannel: " + message.channel.name 
    + "\nUser: " + message.author.tag + "\n")
    
  }
}

answer = "";

function test(n) {
  var is = ["is noob", "is pro", "is trash", "is delusional", "should be banned rn!", "is big sweat"]
  var pickis = is[Math.floor(Math.random() * is.length)];

  let answer = `**${user} ${pickis}** \n`
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = 1; i < n; i++) {
      answer += `**${user} ${pickis}** \n`;
    }
    return answer;
  }
}