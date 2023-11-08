const config = require('../config.json');
const Discord = require("discord.js");

module.exports = {
    name: 'interactionCreateTwo',
    async execute (interaction){
    if (interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        if (selected == "instagram"){
           return await interaction.reply("Acesse o canal para comprar: https://discord.com/channels/1170491792613965914/1171208999224479814 ")
        } else if (selected == "youtube"){
           return await interaction.reply("Acesse o canal para comprar: https://discord.com/channels/1170491792613965914/1171209130397151372 ")
        } else if (selected == "tiktok"){
          return await interaction.reply("Acesse o canal para comprar: https://discord.com/channels/1170491792613965914/1171209049518387281 ")
        } else if (selected == "nitro mensal"){
            return await interaction.reply("Acesse o canal para comprar: https://discord.com/channels/1170491792613965914/1171208777706516590 ")
        } else if (selected == "nitro trimensal"){
            return await interaction.reply("Acesse o canal para comprar: https://discord.com/channels/1170491792613965914/1171208777706516590 ")
        }
    }
  
}}