const telegramApi = require('node-telegram-bot-api')

const token = '8097878238:AAGgvPFpGRD1jr07gFB8sUq3CxVOEqIhWZU'

const bot = new telegramApi(token, { polling: true })

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text == '/start') {

        bot.sendMessage(chatId, `Hi! Welcome to the my telegram bot.\n(Created by forger node.js)`)

    }

    else if (text == '/name') {

        bot.sendMessage(chatId, 'hello! \nMy name is Saidazim (forger). \nage 15 \nim sutdy with IT Front-end')

    }

    else if (text == '/projects') {

        bot.sendMessage(chatId, 'My porjects:\nhttps://forger6969.github.io/StarBucks/\nhttps://forger6969.github.io/CoinFlip\nhttps://forger6969.github.io/portfolio/ ')

    }

    else if (text == '/help') {

        bot.sendMessage(chatId, 'Список доступный команд: /name \n /projects \n /help')

    } else {
        bot.sendMessage(chatId, 'Неизвестная команда напишите /help чтобы увидеть список команд')
    }



    const chatid2 = msg.chat.id;
    const userName = msg.from.username || `${msg.from.first_name} ${msg.from.last_name || ''}`;
    const messageText = msg.text;

    console.log(`Пользователь: ${userName} (ID: ${chatId2}) написал: ${messageText}`);





})