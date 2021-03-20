const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class EmbedCommand extends BaseCommand {
  constructor() {
    super('embed', 'test', []);
  }

  async run(client, message, args) {
    
    const msgEmbed = new Discord.MessageEmbed()
    .setTitle(" Follow the following verification method down below.")
    .setImage(message.author.displayAvatarURL())
    .setColor("#20c7d6")
    .setDescription(`To verify type \`-verify\` `);
    message.channel.send(msgEmbed)
    message.channel.send('https://tenor.com/view/rainbow-border-line-colorful-gif-17203048')
  }
}