// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
const Discord = require('discord.js')
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const role = member.guild.roles.cache.get('804092291823960099');
    member.roles.add(role.id).catch(err => console.log(err));

    const welcomeChannel = member.guild.channels.cache.get('804092292260298752');
    const rulesChannel = member.guild.channels.cache.get('804092292260298754');
    
    
    const welcomeEmbed = new Discord.MessageEmbed()
    .setTitle(member.user.tag +" Welcome to our discord")
    .setImage(member.user.displayAvatarURL())
    .setColor("#20c7d6")
    .setDescription(`Welcome to ${member.guild.name}. Read our rules in ${rulesChannel}`);
    welcomeChannel.send(welcomeEmbed)
    welcomeChannel.send('https://tenor.com/view/rainbow-border-line-colorful-gif-17203048')
  } 
}


