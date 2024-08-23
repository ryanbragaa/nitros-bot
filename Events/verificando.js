
require('../index')
require('../Commands/adm/verificar')

const Discord = require('discord.js')
const client = require('../index')
const { QuickDB } = require("quick.db")
const db = new QuickDB()

client.on("interactionCreate", async (interaction) => {
    if(interaction.isButton()) {
        if(interaction.customId === "verificar") {
            let role_id = await db.get(`cargo_verificação_${interaction.guild.id}`);
            let role = interaction.guild.roles.cache.get(role_id)
            if(!role) return;
            interaction.member.roles.add(role.id)
            interaction.reply({ content: `Olá **${interaction.user.username}**, você foi verificado com sucesso!`, ephemeral: true } )
        }
    }
}) 