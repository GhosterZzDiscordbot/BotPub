const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = class TempbanCommand extends BaseCommand {
  constructor() {
    super('tempban', 'moderation', []);
  }

 async run(client, message, args) {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You do not have permission to use this command.');
  if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('i require \` BAN MEMBERS \`  permission to tempban');

  const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let reason = args.slice(2).join(" ");
  let time = args[1];
  const banEmbed = new Discord.MessageEmbed()
    .setTitle(`You have banned in ${message.guild.name}`)
    .addField('Reason: ${reason}',`Duration: ${time}`)
    .setTimestamp();

  if (!args[0]) return message.channel.send('You must state a Member to tempban. \`-temban @member time\`')
  if (!mentionedMember) return message.channel.send('The Member stated is not in the server. ');
  if (!mentionedMember.bannable) return message.channel.send('This Member is not bannable');
  if (mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('You cannot tempban this member as there role is the same or higher than yours');
  if (!reason) reason = 'No Reason given.';
  if (!time) return message.channel.send('You must state a time to Tempban this member. Example:\`~tempban @member 7d reason \`');

  await mentionedMember.send(banEmbed).catch(err => console.log(err));
  await mentionedMember.ban({
   days: 7,
   reason: reason
  }).catch(err => console.error(err));

  setTimeout(async function () {
await message.guild.fetchBans().then(async bans =>{
if (bans.size == 0) return message.channel.send('This guild does not have any bans.');
let bannedUser = bans.find (b => b.user.id == mentionedMember.id);
if (!bannedUser) return console.log('Member unbanned');
await message.guild.members.unban(bannedUser.user, reason).catch(err => console.log(err));
});

  },ms(time));
}
}