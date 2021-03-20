const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class VoteCommand extends BaseCommand {
  constructor() {
    super('vote', 'media', []);
  }

  async run(client, message, args) {
    const filter = m => m.author.id == message.author.id;
     let embed = new Discord.MessageEmbed()
      .setFooter (`Vote Made By ${message.author.tag}`);
    

message.channel.send('What is the Vote Topic.');
try {
  let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
  console.log(msg.first().content);
  embed.setTitle(msg.first().content)
 
} catch (err) {
  console.log(err)
  messege.channel.send ('You ran out of time, Re-run command')
}
message.channel.send('What is the First point to vote?.');
try {
  let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
  console.log(msg.first().content);
  embed.addField(`[:red_circle:](The first option to vote?)`, `${msg.first().content}`)
} catch (err) {
  console.log(err);
  messege.channel.send ('You ran out of time, Re-run command')
}

message.channel.send('what is the point to vote ?.');
try {
  let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
  console.log(msg.first().content);
  embed.addField(`[:blue_circle:](The second option to vote)`, `${msg.first().content}`)
} catch (err) {
  console.log(err);
messege.channel.send ('You ran out of time, Re-run command')
}
messege.channel.send (embed).then (sentMessage => sentMessage.react(':red_circle:')).then(reaction => reaction.message.react(':blue_circle:'));}}
