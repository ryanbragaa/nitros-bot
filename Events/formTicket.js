require('../index')
const Discord = require('discord.js')
const client = require('../index')
const { QuickDB } = require("quick.db");
const { userMention } = require('discord.js');
const db = new QuickDB();


client.on("interactionCreate", async (interaction) => {
    const canal_logsVendas = "1170515428787879937"
    if (interaction.isButton()) {
        if (interaction.customId === "venda_realizada") {

            if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
                interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true }) 
            }

            if (!interaction.guild.channels.cache.get(`${canal_logsVendas}`)) return interaction.reply({ content: `O sistema está desativado`, ephemeral: true })
            const modal = new Discord.ModalBuilder()
                .setCustomId("modalDois")
                .setTitle("Formulário De Venda")

            const pergunta1 = new Discord.TextInputBuilder()
                .setCustomId("pergunta1")
                .setLabel("Quem realizou a compra ?")
                .setMaxLength(20)
                .setPlaceholder("Escreva sua resposta aqui.")
                .setRequired(true)
                .setStyle(Discord.TextInputStyle.Short)

            const pergunta2 = new Discord.TextInputBuilder()
                .setCustomId("pergunta2")
                .setLabel("Qual produto foi comprado ?")
                .setMaxLength(20)
                .setPlaceholder("Escreva sua resposta aqui.")
                .setRequired(true)
                .setStyle(Discord.TextInputStyle.Short)

            const pergunta3 = new Discord.TextInputBuilder()
                .setCustomId("pergunta3")
                .setLabel("Qual valor foi pago ?")
                .setMaxLength(20)
                .setPlaceholder("Escreva sua resposta aqui.")
                .setRequired(true)
                .setStyle(Discord.TextInputStyle.Short)

            modal.addComponents(
                new Discord.ActionRowBuilder().addComponents(pergunta1),
                new Discord.ActionRowBuilder().addComponents(pergunta2),
                new Discord.ActionRowBuilder().addComponents(pergunta3)
            )

            await interaction.showModal(modal)
        }
    } else if (interaction.isModalSubmit()) {
        if (interaction.customId === "modalDois") {
            let resposta1 = interaction.fields.getTextInputValue("pergunta1")
            let resposta2 = interaction.fields.getTextInputValue("pergunta2")
            let resposta3 = interaction.fields.getTextInputValue("pergunta3")

            if (!resposta1) resposta1 = "Não informado."
            if (!resposta2) resposta2 = "Não informado."
            if (!resposta3) resposta3 = "Não informado."

            let embed = new Discord.EmbedBuilder()
                .setColor("Blue")
                .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`O usuário ${interaction.user} enviou o formulário de venda abaixo:`)
                .addFields(
                    {
                        name: `Quem realizou a compra ?`,
                        value: `*Membro:* \`${resposta1}\``,
                        inline: false
                    },
                    {
                        name: `Qual produto foi comprado ?`,
                        value: `*Produto:* \`${resposta2}\``,
                        inline: false
                    },
                    {
                        name: `Qual valor foi pago ?`,
                        value: `*Valor R$:* \`${resposta3}\``,
                        inline: false
                    }
                )

            interaction.reply({ content: `Olá **${interaction.user.username}**, sua log de venda foi enviada com sucesso!`, ephemeral: true })
            await interaction.guild.channels.cache.get(`${canal_logsVendas}`).send({ embeds: [embed] })
        }
    }
})