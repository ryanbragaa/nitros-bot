const Discord = require("discord.js");
const config = require('../../config.json');

module.exports = {
    name: "sociais",
    description: "Comandos para enviar nossas redes sociais",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        const embed1 = new Discord.EmbedBuilder() 
        .setAuthor({ name: `${config.nomeBot} - Redes Sociais`})
        .setDescription("Aqui estão as nossas redes sociais")
        .setColor("#ff0000")
        .setFooter({ text: `${config.nomeBot} | Todos o direitos reservados 2023`})

        const botoes = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
            .setLabel("YOUTUBE")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL("https://www.youtube.com/channel/UCfVZdHVPyT3PNY7YzM_uEVg")
        )

    await interaction.reply({embeds:[embed1], components: [botoes]})
    }
}