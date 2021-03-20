const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RoleCommand extends BaseCommand {
  constructor() {
    super('role', 'moderation', []);
  }

  async run(client, message, args) {
    //-role @member @role
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission to use this command.');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I require \`MANAGE ROLES\` permission to change users roles.');

    const mentiondMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

    if (!args[0]) return message.channel.send('You must state a member to give a role to along with the role you want to give');
    if (!mentiondMember) return message.channel.send('The member stated is not in the server');
    if (mentiondMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('You cannot give roles to this user as there role is the same or higher than yours.');
    if (!args[1])return message.channel.send('You must state a role to give to the member mentioned.');
    if (!role) return message.channel.send('The role stated does not exist.');
    if (message.member.roles.highest.position <= role.position) return message.channel.send('You cannot give this role as it is the above or above your current highest role.');
    
    await mentiondMember.roles.add(role.id).catch(err => console.log(err));
  }
}