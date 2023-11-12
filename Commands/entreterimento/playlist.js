const Discord = require("discord.js");
const config = require('../../config.json');

module.exports = {
    name: "playlist",
    description: "Playlist Da Nistros",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        
    await interaction.reply({content:"....."})
    }
}