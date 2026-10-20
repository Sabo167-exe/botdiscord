const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./token.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
    console.log(`✅ Bot connecté : ${client.user.tag}`);
});

client.login(token);