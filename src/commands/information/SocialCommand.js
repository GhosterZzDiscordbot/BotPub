const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'information', []);
  }

  async run(client, message, args) {
    
    const twitchEmbed = new Discord.MessageEmbed()
    .setTitle('GhosterZz Twitch Channel')
    .setURL('https://www.twitch.tv/ghosterzz_')
    .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0XamHcHIbspLmLaADn1KxhqJGddIRIaTig&usqp=CAU')
    .setColor('#b82ece')
    .addField('Check out GhosterZz on twitch.','This is my twitch channel come and follow!!! (Click the link above)')
    .setTimestamp()
    .setFooter("GhosterZz" , "https://lh3.googleusercontent.com/-F0yC0bnpqHE/YFS1b_-ewtI/AAAAAAAAAAY/yak9ZHittt4cI8s9IcN1Yu7xSpUzvjSYACMICGAYYCw/s83-c/Logo%2B%25281%2529.jpg")
    
    const discordEmbed = new Discord.MessageEmbed()
    .setTitle('Join Ayko  Clan ')
    .setURL('https://discord.gg/zqxeKAPW2p')
    .setThumbnail("https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png")
    .setColor("#588abe")
    .addField('Hey come join our clan server we do tryouts.' , ' Giveaways, Updates , Tryouts')
    .setTimestamp()
    .setFooter( "Ayko Clan server","https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png")
    
    const youtubeEmbed = new Discord.MessageEmbed()
    .setTitle('Come and subscribe to our youtube Channel.')
    .setURL('https://www.youtube.com/channel/UCiwyED_Z6Elic9-g-PUcilw')
    .setThumbnail("https://lh3.googleusercontent.com/proxy/K5YJuFu8DUx0ExVHPPrgoAnRetwGe4RGbtrrWBuuNdsdhMg6ZLHs_YMH6HbBdI0kjtNQ1UlHO8ZfvWgUTsPUmyIiKaLdZ-CvNQ23TGzd0aTziBBB4Pc")
    .setColor("#d8262f")
    .addField('Hey come and subscribe to our clan channel we are going to do clan tryouts live soon.', 'Click on the link above')
    .setTimestamp()
    .setFooter( "Ayko Clans Youtube","https://lh3.googleusercontent.com/proxy/K5YJuFu8DUx0ExVHPPrgoAnRetwGe4RGbtrrWBuuNdsdhMg6ZLHs_YMH6HbBdI0kjtNQ1UlHO8ZfvWgUTsPUmyIiKaLdZ-CvNQ23TGzd0aTziBBB4Pc")

    await message.channel.send(twitchEmbed).catch(err => console.log(err))
    await message.channel.send(youtubeEmbed).catch(err => console.log(err))
    await message.channel.send(discordEmbed).catch(err => console.log(err))
    

  }
}
