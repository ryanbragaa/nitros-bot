const Discord = require("discord.js");

module.exports = {
    name: "ticket",
    description: "abra o painel de tickets",
    type: Discord.ApplicationCommandType.ChatInput,
   

    run: async (client, interaction) => {

        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({content: `Você não tem permissão para utilizar esse comando!`, ephemeral: true  })
        } else {
            let embed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
            .setDescription(`Abra um ticket aqui no servidor selecionando uma das opções abaixo:`);


            let painel = new Discord.ActionRowBuilder().addComponents(
                new Discord.StringSelectMenuBuilder()
                .setCustomId("painel_ticket")
                .setPlaceholder("Clique Aqui!")
                .addOptions(
                    {
                        label: "Instagram",
                        description: "abra um ticket na opção Instagram.",
                        value: "opc1"
                    },
                    {
                        label: "TikTok",
                        description: "abra um ticket na opção Tiktok.",
                        value: "opc2"
                    },
                    {
                        label: "Yotube",
                        description: "abra um ticket na opção Youtube.",
                        value: "opc3"
                    },
                    {
                        label: "Conta-Discord",
                        description: "abra um ticket na opção Conta-Discord.",
                        value: "opc4"
                    },
                    {
                        label: "Nitro-Mensal",
                        description: "abra um ticket na opção Nitro-Mensal.",
                        value: "opc5"
                    },
                    {
                        label: "Nitro-Trimensal",
                        description: "abra um ticket na opção Nitro-Trimensal.",
                        value: "opc6"
                    },
                    {
                        label: "Nitro-Gift-Mensal",
                        description: "abra um ticket na opção Nitro-Gift-Mensal.",
                        value: "opc7"
                    },
                    {
                        label: "Serviços de Streaming",
                        description: "abra um ticket na opção Serviços de Streaming.",
                        value: "opc8"
                    },
                    {
                        label: "Sala personalizada Free fire",
                        description: "abra um ticket na opção Sala personalizada Free fire .",
                        value: "opc9"
                    }
                    
                )
            );

            interaction.reply({ content: `✔ Mensagem enviada!`, ephemeral: true })
            interaction.channel.send({ embeds: [embed], components: [painel] })
        }
        
    }
}