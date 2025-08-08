const telegramApi = require('node-telegram-bot-api')

const token = '8097878238:AAGgvPFpGRD1jr07gFB8sUq3CxVOEqIhWZU'

const bot = new telegramApi(token, { polling: true })

bot.on('message', msg => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const userName = msg.from.username || `${msg.from.first_name} ${msg.from.last_name || ''}`;

    console.log(`Пользователь: ${userName} (ID: ${chatId}) написал: ${text}`); // ВЫВОД В КОНСОЛЬ

    if (text === '/start') {
        bot.sendMessage(chatId, `Hi! Welcome to my telegram bot.\n(Created by forger node.js)`);
    } else if (text === '/name') {
        bot.sendMessage(chatId, 'hello! \nMy name is Saidazim (forger). \nage 15 \nim studying IT Front-end');
    } else if (text === '/projects') {
        bot.sendMessage(chatId, 'My projects:\nhttps://forger6969.github.io/StarBucks/\nhttps://forger6969.github.io/CoinFlip\nhttps://forger6969.github.io/portfolio/');
    } else if (text === '/help') {
        bot.sendMessage(chatId, 'Список доступных команд:\n/name\n/projects\n/help');
    } else {
        bot.sendMessage(chatId, 'Неизвестная команда. Напишите /help чтобы увидеть список команд.');
    }
});

bot.on('polling_error', (error) => {
    console.error('[polling_error]', JSON.stringify(error, null, 2));
});