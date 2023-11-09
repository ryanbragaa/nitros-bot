const Discord = require("discord.js");
const config = require('../../config.json');

module.exports = {
    name: "playlist",
    description: "Playlist Da Nistros",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        
    await interaction.reply({content:"https://open.spotify.com/playlist/32YGutOLaicCbIfZpCkxXp?si=dde232c0230c4024"})
    }
}