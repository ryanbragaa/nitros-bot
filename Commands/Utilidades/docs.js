const Discord = require("discord.js");
const config = require('../../config.json');

module.exports = {
    name: "docs",
    description: "Acesse a documentação da tecnologia que quiser",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {


    const row = new Discord.ActionRowBuilder()
    .addComponents(
        new Discord.StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions({
                label: "javascript",
                description: "Veja a documentação de Javascript",
                value: "javascript"
                },
                {
                    label: "python",
                    description: "Veja a documentação de Python",
                    value: "python"
                },
                {
                    label: "C#",
                    description: "Veja a documentação de C#",
                    value: "csharp"
                },
                {
                    label: "discord.js",
                    description: "Veja a documentação de Discord.js",
                    value: "discordjs"
                }
            )
    )
    await interaction.reply({content: "Selecione uma das techs abaixo:", components: [row]})

    }


 
       
    
}