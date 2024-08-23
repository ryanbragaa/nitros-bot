const Discord = require('discord.js');
const client = require('../index');
const { QuickDB } = require('quick.db');
const db = new QuickDB();




client.on("interactionCreate", async (interaction) => {
    if(interaction.isButton() && interaction.customId === "Cupom") {
        const modal_cupom = new Discord.ModalBuilder()
            .setCustomId("modalDivulgador")
            .setTitle("🎫 Cupom")
        
        const cupom = new Discord.TextInputBuilder()
            .setCustomId("qual_cupom")
            .setLabel("Insira o cupom no espaço abaixo")
            .setMaxLength(20)
            .setPlaceholder("Insira o cupom aqui!")
            .setRequired(true)
            .setStyle(Discord.TextInputStyle.Short)

        modal_cupom.addComponents(
            new Discord.ActionRowBuilder().addComponents(cupom)
        )

        await interaction.showModal(modal_cupom)
    } else if (interaction.isModalSubmit()) {
        if(interaction.customId === "modalDivulgador") {
            const cupomUsado = interaction.fields.getTextInputValue("qual_cupom")

            if (!cupomUsado) cupomUsado = "Não informado.";

            interaction.reply({ content: `Olá **${interaction.user}**, o cupom ${cupomUsado} foi utilizado com sucesso!`})

            await db.set(`cupom_${interaction.user.id}_Usado`, cupomUsado);

        }
    }
})


