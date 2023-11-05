const Discord = require("discord.js");
const config = require('../../config.json');

module.exports = {
    name: "playlist",
    description: "Playlist para estudos",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        
    await interaction.reply({content:"https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=bdfa0dfa494940bf"})
    }
}