let id = message.presence.thumbnail !== null || message.presence.id({dissable.mentions()});
const embed = new Discord.MessageEmbed()
.setThumbnail(`https://icon.btl.co/pp/id/player/${id}`)
message.channels.send(embed)
