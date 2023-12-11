require('../index')
const Discord = require('discord.js')
const client = require('../index')

const { QuickDB } = require("quick.db")
const db = new QuickDB()

client.on("guildMemberAdd", async (member) => {
    let canal_logs = await db.get(`canal_entrada_${member.guild.id}`)
    if (!canal_logs) return

    let embed = new Discord.EmbedBuilder()
    .setColor("Blue")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle("👋 Boas Vindas!")
    .setDescription(`> Olá ${member}!\n\nSeja bem-vindo(a) ao servidor \`${member.guild.name}\`\n\nAtualmente estamos com \`${member.guild.memberCount}\` membros`)

    member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` })
})