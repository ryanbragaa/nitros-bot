const Discord = require("discord.js");
const Config = require("../../config.json");

module.exports = {
    name: "comprar",
    description: "Comando para realizar compras",
    type: Discord.ApplicationCommandType.ChatInput,
    
    run: async (client, interaction) => {


        const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.StringSelectMenuBuilder()
                .setCustomId("select")
                .setPlaceholder("Nenhum Produto Selecionado")
                .addOptions(
                    {
                        label: "seguidores-instagram",
                        description: "Veja os valores",
                        value: "instagram"
                    },
                    {
                        label: "inscritos-youtube",
                        description: "Veja os valores",
                        value: "youtube"
                    },
                    {
                        label: "seguidores-tiktok",
                        description: "Veja os valores",
                        value: "tiktok"
                    },
                    {
                        label: "nitro-mensal",
                        description: "Veja os valores",
                        value: "nitro mensal"
                    },
                    {
                        label: "nitro-trimensal",
                        description: "Veja os valores",
                        value: "nitro trimensal"
                    }
                )
        )
        await interaction.reply({content: "Selecione uma das opções abaixo:", components: [row], ephemeral: true});

        
    
    }
}