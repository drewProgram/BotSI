import Discord from 'discord.js';
import config from './config.json';

// creating instance of the discord client
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Estou pronto!');
});

client.on('message', (message) => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find((ch) => ch.name === 'boas-vindas');

  if (!channel) return;

  channel.send(`Bem vindo ao servidor da sala, ${member}!`);
});

client.login(config.token);
