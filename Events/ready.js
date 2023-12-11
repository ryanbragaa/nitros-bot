const Discord = require("discord.js");
const client = require("../index");
const { joinVoiceChannel } = require('@discordjs/voice');
const config = require('../config.json');

client.once('ready', () => {
    console.log(`Bot está online como ${client.user.tag}!`);
});
client.login(config.TOKEN)


client.on("ready", () => {
    let react = [
        `Nitros`,
        `Criado Por: Braga`,
        `Suporte 24 horas`,
        `🌐 Versão: v${require('discord.js').version.slice(0, 6)}`
    ],
        fera = 0;
    setInterval(() => client.user.setPresence({
        activities: [{
            name: `${react[fera++ % react.length]}`,
            type: Discord.ActivityType.Streaming,
            url: 'https://www.twitch.tv/discord'
        }]
    }), 15000);

    client.user
        .setStatus("online");
});


client.on('ready', () => {
    let canal = client.channels.cache.get("1183885381247193158")
    if (!canal) return console.log("❌ Não foi possivel entrar no canal de voz.")
    if (canal.type !== Discord.ChannelType.GuildVoice) return console.log("❌ Não foi possivel entrar no canal de voz.")

    try {
        joinVoiceChannel({
            channelId: canal.id,
            guildId: canal.guild.id,
            adapterCreator: canal.guild.voiceAdapterCreator,
        })
        console.log(`✔ Entrei no canal de voz [ ${canal.name} ] com sucesso!`)
    } catch (e) {
        console.log("❌ Não foi possivel entrar no canal de voz.")
    }
})