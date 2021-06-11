const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", function() {
  console.log("Connected");
});
client.on('ready', async () => {
  client.user.setActivity("Backup | TheOfficialAyush#3282",{type: "LISTENING"})
     }); 
client.on("message", message => {
  if (message.content.startsWith(`<@!${client.user.id}>`)) {
    (async () => {
      var voiceChannel = message.member.voice.channel;
      voiceChannel
        .join()
        .then(async connection => {
          const dispatcher = connection.play(
            "backup bot.mp3"
          );
          dispatcher.on("finish", end => {
            voiceChannel.leave();
          });
        })
        .catch(err => console.log(err));
    })();
  }
});

client.login(process.env.token);