const db = require("quick.db")
const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    name: 'bj',
    description: 'blackjack',

    async run(bot, message, args) {

        
        let moneysymbolfront = "$"

        let moneysymbolback = ""

        let user = message.author;
        let money = parseInt(args[1]);
        var Economy = new db.table('Economy');
        let bal = await Economy.fetch(`${user.id}.balance`);

        Economy.add(`${user.id}.bjtotgames`, 1)

        if (args[0] === 'all' || args[0] === 'max') {
            money = bal;
            Economy.add(`${user.id}.totalwagered`, money)
            Economy.add(`${user.id}.claimreward`, money/1000)
        } else {
            money = parseInt(args[0]);
            Economy.add(`${user.id}.totalwagered`, money)
            Economy.add(`${user.id}.claimreward`, money/1000)
        }
  
        if (!money || money < 1 || money > bal) {
            message.channel.send(`Please type a valid amount ${user}`)
            return
        }
  
        if (!bal) {
            message.channel.send("You are not in the system.")
            return
        }



        var numCardsPulled = 0;
        var gameOver = false;
  
        var player = {
            cards: [],
            score: 0
        };
        var dealer = {
            cards: [],
            score: 0
        };

      function getCardsValue(a) {
          var cardArray = [],
              sum = 0,
              i = 0,
              dk = 10.5,
              doubleking = "QQ",
              aceCount = 0;
          cardArray = a;
          for (i; i < cardArray.length; i += 1) {
              if (cardArray[i].rank === "J" || cardArray[i].rank === "Q" || cardArray[i].rank === "K") {
                  sum += 10;
              } else if (cardArray[i].rank === "A") {
                  sum += 11;
                  aceCount += 1;
              } else if (cardArray[i].rank === doubleking) {
                  sum += dk
              } else {
                  sum += cardArray[i].rank;
              }
          }
          while (aceCount > 0 && sum > 21) {
              sum -= 10;
              aceCount -= 1;
          }
          return sum;
      }

      var deck = {
          deckArray: [],
          initialize: function() {
              var suitArray, rankArray, s, r, n;
              suitArray = ["clubs", "diamonds", "hearts", "spades"];
              rankArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
              n = 13;
              for (s = 0; s < suitArray.length; s += 1) {
                  for (r = 0; r < rankArray.length; r += 1) {
                      this.deckArray[s * n + r] = {
                          rank: rankArray[r],
                          suit: suitArray[s]
                      };
                  }
              }
          },
          shuffle: function() {
              var temp, i, rnd;
              for (i = 0; i < this.deckArray.length; i += 1) {
                  rnd = Math.floor(Math.random() * this.deckArray.length);
                  temp = this.deckArray[i];
                  this.deckArray[i] = this.deckArray[rnd];
                  this.deckArray[rnd] = temp;
              }
          }
      };

      deck.initialize();
      deck.shuffle();

      async function bet(outcome) {
        if (outcome === "win") {
          db.add(`money_${message.guild.id}_${user.id}`, money)
        }
        if (outcome === "lose") {
          db.subtract(`money_${message.guild.id}_${user.id}`, money)
        }
    }

      function resetGame() {
          numCardsPulled = 0;
          player.cards = [];
          dealer.cards = [];
          player.score = 0;
          dealer.score = 0;
          deck.initialize();
      }

      function endMsg(title, msg, dealerC) {
          let cardsMsg = "";
          player.cards.forEach(function(card) {
              cardsMsg += "[`" + card.rank.toString();
              if (card.suit == "hearts") cardsMsg += "♥"
              if (card.suit == "diamonds") cardsMsg += "♦"
              if (card.suit == "spades") cardsMsg += "♠"
              if (card.suit == "clubs") cardsMsg += "♣"
              cardsMsg += "`](https://www.youtube.com/c/Hystogan/videos) "
          });
          cardsMsg += " 🡺 " + player.score.toString()

          let dealerMsg = "";
          if (!dealerC) {
              dealerMsg = "[`" + dealer.cards[0].rank.toString();
              if (dealer.cards[0].suit == "hearts") dealerMsg += "♥"
              if (dealer.cards[0].suit == "diamonds") dealerMsg += "♦"
              if (dealer.cards[0].suit == "spades") dealerMsg += "♠"
              if (dealer.cards[0].suit == "clubs") dealerMsg += "♣"
              dealerMsg += " ? ?`](https://www.youtube.com/c/Hystogan/videos)"
          } else {
              dealerMsg = "";
              dealer.cards.forEach(function(card) {
                  dealerMsg += "[`" + card.rank.toString();
                  if (card.suit == "hearts") dealerMsg += "♥"
                  if (card.suit == "diamonds") dealerMsg += "♦"
                  if (card.suit == "spades") dealerMsg += "♠"
                  if (card.suit == "clubs") dealerMsg += "♣"
                  dealerMsg += "`](https://www.youtube.com/c/Hystogan/videos) "
              });
              dealerMsg += " 🡺 " + dealer.score.toString()
          }

          const gambleEmbed = new Discord.MessageEmbed()
              .setColor('#000001')
              .setTitle(message.author.username + `'s Game Table` + '\n')
              .addField('Your Cards', cardsMsg)
              .addField('Dealer\'s Cards', dealerMsg)
              .addField(title, msg)
              .setFooter('Good Luck!');

          message.channel.send(gambleEmbed);
      }

      async function endGame() {
          if (player.score === 21) {
              bet('win');
              gameOver = true;
              await endMsg("YOU WIN!", `You got 21! You win!\n${moneysymbolfront}${(money*1.5).toLocaleString()} ${moneysymbolback} has been added.`, true)
              Economy.add(`${user.id}.balance`, money*1.5)
              Economy.add(`${user.id}.bjgameswon`, 1)
              Economy.add(`${user.id}.bjgameswonbj`, 1)
          }
          if (player.score > 21) {
              bet('lose');
              gameOver = true;
              await endMsg("YOU LOSE!", `You busted!\n${moneysymbolfront}${money.toLocaleString()} ${moneysymbolback} has been taken.`, true)
              Economy.subtract(`${user.id}.balance`, money)
          }
          if (dealer.score === 21) {
              bet('lose');
              gameOver = true;
              await endMsg("YOU LOSE!", `The dealer got 21!\n${moneysymbolfront}${money.toLocaleString()} ${moneysymbolback} has been taken.`, true)
              Economy.subtract(`${user.id}.balance`, money)
          }
          if (dealer.score > 21) {
              bet('win');
              gameOver = true;
              await endMsg("YOU WIN!", `Dealer busted!\n${moneysymbolfront}${money.toLocaleString()} ${moneysymbolback} has been added.`, true)
              Economy.add(`${user.id}.balance`, money)
              Economy.add(`${user.id}.bjgameswon`, 1)
          }
          if (dealer.score >= 17 && player.score > dealer.score && player.score < 21) {
              bet('win');
              gameOver = true;
              await endMsg("YOU WIN!", `You beat the dealer\n${moneysymbolfront}${money.toLocaleString()} ${moneysymbolback} has been added.`, true)
              Economy.add(`${user.id}.balance`, money)
              Economy.add(`${user.id}.bjgameswon`, 1)
          }
          if (dealer.score >= 17 && player.score < dealer.score && dealer.score < 21) {
              bet('lose');
              gameOver = true;
              await endMsg("YOU LOSE!", `The dealer got you!\n${moneysymbolfront}${money.toLocaleString()} ${moneysymbolback} has been taken.`, true)
              Economy.subtract(`${user.id}.balance`, money)
          }
          if (dealer.score >= 17 && player.score === dealer.score && dealer.score < 21) {
              gameOver = true;
              await endMsg("No one wins!", `You both are equally matched!\n${moneysymbolfront}${money.toLocaleString()} ${moneysymbolback} has been returned.`, true)
          }
      }

      function dealerDraw() {

          dealer.cards.push(deck.deckArray[numCardsPulled]);
          dealer.score = getCardsValue(dealer.cards);
          numCardsPulled += 1;
      }

      function newGame() {
          hit();
          hit();
          dealerDraw();
          endGame();
      }

      function hit() {
          player.cards.push(deck.deckArray[numCardsPulled]);
          player.score = getCardsValue(player.cards);

          numCardsPulled += 1;
          if (numCardsPulled > 2) {
              endGame();
          }
      }

      function stand() {
          while (dealer.score < 17) {
              dealerDraw();
          }
          endGame();
      }
      // END Javascript blackjack game from echohatch1. Modified for Grape. **

      newGame();
      async function loop() {
          if (gameOver) return;

          endMsg("BlackJack Options:", '**Type ``hit`` to hit, and ``stand`` to stand!** ', false)

          let filter = m => m.author.id === message.author.id;
          message.channel.awaitMessages(filter, {
              max: 1,
              time: 1200000,
              errors: ['time']
          }).then(message => {
              message = message.first()
              if (message.content === "h" || message.content === "H" || message.content === "hit") {
                  hit();
                  loop();
                  return
              } else if (message.content === "s" || message.content === "S" || message.content === "stand") {
                  stand();
                  loop();
                  return
              } else {
                  bet("lose");
                  return
              }
          }).catch(_ => {
              message.channel.send("**You lost all your money!**");
              bet("lose");
              return
          })
      }

      await loop()

      console.log("\nCommand: " + this.name
      + "\nServer: " + message.guild.name
      + "\nChannel: " + message.channel.name
      + "\nUser: " + message.author.tag)

    }
}