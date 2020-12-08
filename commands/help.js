const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`yo kick`', 'To kick the mentioned user')
        .addField('`yo ban`', 'To ban the mentioned user')
        .addField('`yo clear`', 'Purges messages')
        .addField('`yo warn`', 'To warn the mentioned user')
        .addField('`yo warnings`', 'To check how many warnings of the mentioned user')
        .addField('`yo deletewarns`', 'To delete all the warnings records of the mentioned user')
        .addField('`yo mail`', 'To give a mail to the mentioned Note:- First mention the user and then type the message')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`yo meme`', 'Generates a random meme')
        .addField('`yo ascii`', 'Converts text into ascii')
        .addField('`yo lovecheck`', 'To check love between 2 mentioned users')
        .addField('`yo howgay`', 'To get the gayrate of the mentioned user')
        .addField('`yo howlesbian`', 'To get the lesbian rate of the mentioned user')
        .addField('`yo howsimp`', 'To get the simp rate if the mentioned user')
        .addField('`yo pp`', 'To get the pp size of the mentioned user')
        .addField('`yo shoot`', 'To shoot the mentioned user')
        .addField('`yo among us`', 'To make a among us story with the mentioend user')
        .addField('`yo waifurate`', 'To get the waifurate of the mentioned user')
        .addField('`yo howhot`', 'TO get how hot is the mentioned user is')
        .addField('`yo rps`', 'To play rock paper scissor with the me Note:- You need to type Rock or Paper or Scissor after the command eg: yo rps rock')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`yo ping`', 'Get the bot\'s API ping')
        .addField('`yo weather`', 'Checks weather forecast for provided location')
        .addField('`yo covid`', 'To get Covid 19 stats for the mentioned country')
        .addField('`yo avatar`', 'To get the avatar of the mentioned user')
        .addField('`yo say`', 'To send the message through the bot anonymously')
        .addField('`yo qr`', 'To get the qr code of a single word **Note:- Only one word**')
        .addField('`yo serverinfo`', 'To get the server info of the server in which the command is executed')
        .addField('`yo calculate`', 'To calculate the given number **Note**:**Do not spam huge numbers and expect the answer**')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}