const Canvas = require('canvas');
const Discord = require('discord.js');


module.exports = {
    name: 'ido',
    description: 'canvas',
    async run(bot, message, args) {

        user = message.author;

        if (!args[0]) {

            message.channel.send("Oi, come on what do you wanna do?")

        } else {

            if (args[0] == "delete") {

                const canvas = Canvas.createCanvas(748, 356);
                const ctx = canvas.getContext('2d');


                const background = await Canvas.loadImage('https://media.discordapp.net/attachments/588373428247986185/807045012558839858/delete.png');
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

                ctx.font = '24px Segoe UI';
                ctx.fillStyle = '#000000';
                ctx.fillText("Aka " + user.username, 157, 41);

                ctx.font = '20px Times New Roman';
                ctx.fillStyle = '#000000';
                ctx.fillText("Created by Hystogan", 10, 350);


                const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
                ctx.drawImage(avatar, 120, 130, 200, 200);

                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'spanklol.jpg');

                message.channel.send(attachment);

            } else if (args[0] == "wait") {

                const canvas = Canvas.createCanvas(600, 591);
                const ctx = canvas.getContext('2d');


                const background = await Canvas.loadImage('https://media.discordapp.net/attachments/588373428247986185/807089757808623626/eb9abdaaea2487c1d3e0eca6daff8670.jpg');
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

                ctx.font = '30px Times New Roman';
                ctx.fillStyle = '#000000';
                ctx.fillText(`This is ${user.username} Waiting...`, 250, 75);

                ctx.font = '25px Times New Roman';
                ctx.fillStyle = '#000000';
                ctx.fillText("Created by Hystogan", 10, 580);

                ctx.save();
                ctx.beginPath();
                ctx.arc(115, 90, 75, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();

                const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
                ctx.drawImage(avatar, 40, 15, 150, 150);
                ctx.restore();

                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'spanklol.jpg');

                message.channel.send(attachment);

            } else if (args[0] == "say") {

                content = "";

                for (var i = 0; i < args.length; i++) {
                    list = args[i];
                    // console.log(list)
                    content += args[i] + " "
                    // console.log(content)
                }

                check = content.substr(args[0].length, content.length).split(" ")

                if (check.length - 2 > 35) {

                    message.channel.send(`That message is to long ${user}`)


                } else if(check.length - 2 == 1) {

                    const canvas = Canvas.createCanvas(852, 480);
                    const ctx = canvas.getContext('2d');


                    const background = await Canvas.loadImage('https://ak.picdn.net/shutterstock/videos/5921018/thumb/1.jpg');
                    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

                    ctx.lineWidth = 5;
                    ctx.strokeStyle = '#FF1493';
                    ctx.strokeRect(10, 10, 832, 460);


                    ctx.font = '50px Times New Roman';
                    ctx.fillStyle = '#FFFFFF';
                    var textString = `${user.username}`,
                        textWidth = ctx.measureText(textString).width;
                    ctx.fillText(textString, (canvas.width / 2) - (textWidth / 2), 75)


                    ctx.font = '35px Times New Roman';
                    ctx.fillStyle = '#FF0000';
                    bigline = ""
                    for (let i = 0; i < user.username.length; i++) {
                        bigline += "─"
                    }
                    lineWidth = ctx.measureText(bigline).width;
                    ctx.fillText(bigline, (canvas.width / 2) - (lineWidth / 2), 100)


                    ctx.font = '180px Times New Roman';
                    ctx.fillStyle = '#FFFFFF';
                    var textString2 = `${content.substr(args[0].length, content.length)}`,
                        textWidth2 = ctx.measureText(textString2).width;
                    ctx.fillText(textString2, 390, 300)


                    const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
                    ctx.drawImage(avatar, 50, 105, 300, 300);

                    ctx.font = '20px Times New Roman';
                    ctx.fillStyle = '#FFFFFFF';
                    ctx.fillText("Created by Hystogan", 20, 455);

                    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'spanklol.jpg');

                    message.channel.send(attachment);

                } else {

                    const canvas = Canvas.createCanvas(852, 480);
                    const ctx = canvas.getContext('2d');


                    const background = await Canvas.loadImage('https://ak.picdn.net/shutterstock/videos/5921018/thumb/1.jpg');
                    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

                    ctx.lineWidth = 5;
                    ctx.strokeStyle = '#FF1493';
                    ctx.strokeRect(10, 10, 832, 460);


                    ctx.font = '50px Times New Roman';
                    ctx.fillStyle = '#FFFFFF';
                    var textString = `${user.username}`,
                        textWidth = ctx.measureText(textString).width;
                    ctx.fillText(textString, (canvas.width / 2) - (textWidth / 2), 75)


                    ctx.font = '35px Times New Roman';
                    ctx.fillStyle = '#FF0000';
                    bigline = ""
                    for (let i = 0; i < user.username.length; i++) {
                        bigline += "─"
                    }
                    lineWidth = ctx.measureText(bigline).width;
                    ctx.fillText(bigline, (canvas.width / 2) - (lineWidth / 2), 100)


                    ctx.font = '30px Times New Roman';
                    ctx.fillStyle = '#FFFFFF';
                    var textString2 = `${content.substr(args[0].length, content.length)}`,
                        // textWidth2 = ctx.measureText(textString2).width;

                        string = textString2;
                    var response = string.split(" ");
                    words1 = response.slice(1, 6)
                    words2 = response.slice(6, 12)
                    words3 = response.slice(12, 18)
                    words4 = response.slice(18, 24)
                    words5 = response.slice(24, 30)
                    words6 = response.slice(30, 36)
                    word1join = words1.join(" ")
                    word2join = words2.join(" ")
                    word3join = words3.join(" ")
                    word4join = words4.join(" ")
                    word5join = words5.join(" ")
                    word6join = words6.join(" ")
                    finalstring = word1join + "\n" + word2join + "\n" + word3join + "\n" + word4join + "\n" + word5join + "\n" + word6join
                    ctx.fillText(finalstring, 400, 180)


                    const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
                    ctx.drawImage(avatar, 50, 105, 300, 300);

                    ctx.font = '20px Times New Roman';
                    ctx.fillStyle = '#FFFFFFF';
                    ctx.fillText("Created by Hystogan", 20, 455);

                    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'spanklol.jpg');

                    message.channel.send(attachment);
                }
            }
        }
        
        console.log("\nCommand: " + this.name 
        + "\nServer: " + message.guild.name 
        + "\nChannel: " + message.channel.name 
        + "\nUser: " + message.author.tag + "\n")
        
    }
}
