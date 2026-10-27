const { createBot } = require('mineflayer-viaproxy');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot 26.52 Mod Online'));
app.listen(process.env.PORT || 3000);

async function startBot() {
  try {
    const bot = await createBot({
      host: 'Gpinoyserver.aternos.me',
      port: 59345,
      username: 'Mod',
      auth: 'offline',
      version: false
    });
    bot.on('spawn', () => console.log('Mod joined 26.52!'));
    bot.on('end', () => setTimeout(startBot, 10000));
    bot.on('error', (e) => console.log(e.message));
  } catch (e) {
    setTimeout(startBot, 10000);
  }
}
startBot();
