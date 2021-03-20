const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'tool', []);
  }

  async run(client, message, args) {
    
    if (!message.guild.me.hasPermission("MANAGE_ROLES"))return message.channel.send('I require \`MANAGE_ROLES\` permission.');
    
    
    
    const role = message.guild.roles.cache.get('822219015325483029');

    await message.member.roles.add(role.id).catch(err => console.log(err));
    
    const rulesChannel = message.guild.channels.cache.get('804092292260298754');
    const welcomeEmbed = new Discord.MessageEmbed()
    .setTitle(message.author.tag +" Has Verified.")
    .setImage(message.author.displayAvatarURL())
    .setColor("#20c7d6")
    .setDescription(`Thanks for verifying to read the rules go to ${rulesChannel}`);
    message.channel.send(welcomeEmbed)
    message.channel.send('https://tenor.com/view/rainbow-border-line-colorful-gif-17203048')
  }
}