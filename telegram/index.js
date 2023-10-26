const TelegramBot = require('node-telegram-bot-api');
require('dotenv/config');

const token =
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_TOKEN;

const webAppUrl = 'https://financial-planner-git-telegram-bot-nurtimax.vercel.app';

if (token) {
  const bot = new TelegramBot(token, { polling: true });

  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
      return await bot.sendMessage(chatId, 'Welcome my channels /end  /register');
    }

    if (text === '/end') {
      return await bot.sendMessage(chatId, 'Goodbye my channels /start ');
    }

    if (text === '/register') {
      return await bot.sendMessage(chatId, 'Have button and enter your forms', {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Enter delivery',
                web_app: { url: webAppUrl }
              }
            ]
          ]
        }
      });
    }

    try {
      await bot.sendMessage(chatId, 'Received your message');
    } catch (error) {
      console.error(error);
    }
  });
}
