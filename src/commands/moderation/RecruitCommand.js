const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RecruitCommand extends BaseCommand {
  constructor() {
    super('recruit', 'moderation', []);
  }

 async run(client, message, args) {
  //-recruit @member
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission to use this command.');
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I require \` MANAGE_ROLES \`  permission.');

  const modRole = message.guild.roles.cache.get('804100659443793991' ,'805898405443403777');
  const staffRole = message.guild.roles.cache.get('822210959652421653','806214083883827220');
  const mentiondMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  const staffPrefix = 'Staff | '

  if (!modRole) return message.channel.send('There is no Mod role to give.');
  if (!staffRole) return message.channel.send('There is no Staff role to give.');
  if (!args[0])  return message.channel.send("\`-recruit @member\` or \`-recruit ID\` ");
  if (!mentiondMember)  return message.channel.send('The member stated is not in the server');

  await mentiondMember.roles.add(modRole.id).catch(err => message.channel.send(`I was unable to give the mod roles due to an error: ${err}`));
  await mentiondMember.roles.add(staffRole.id).catch(err => message.channel.send(`I was unable to give the staff roles due to an error: ${err}`));
  await mentiondMember.setNickname(staffPrefix + mentiondMember.user.username);
  }
}