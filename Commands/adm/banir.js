const Discord = require("discord.js");

module.exports = {
  name: "banir",
  description: "Comando de banir",
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
    name: "user",
    description: "pega o user",
    type: Discord.ApplicationCommandOptionType.User,
    required: true
    },
    {
      name: "motivo",
      description: "Porque o user está indo de arraxta?",
      type: Discord.ApplicationCommandOptionType.String,
      required: true
      }
  ],
  run: async (client, interaction, app) => {
   const membro = interaction.options.getMember("user");
   const user = membro.user;
   const motivo = interaction.options.getString("motivo") ||  'Não informado';

   if(!interaction.guild.members.me.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
    const e = new Discord.EmbedBuilder()
    .setDescription(`Sem perm amigão!`)

    return interaction.reply({ embeds: [e], ephemeral: true })
   };
    if (interaction.user.id === user.id) {

      const e = new Discord.EmbedBuilder()
      .setDescription(`não pode banir vc msm.`)

        return interaction.reply({ embeds: [e], ephemeral: true })
    }

    if (client.user.id === user.id) {
      const e = new Discord.EmbedBuilder()
      .setDescription(`Não sei se te falei, mas você não pode me banir.`)

      return interaction.reply({ embeds: [e], ephemeral: true }) 
    }

    await interaction.deferReply();

    const e = new Discord.EmbedBuilder()
    .setDescription(`Você esta prester a banir o ${user}, gostaria de confirmar sua ação?`)
    .addFields({ name: `Motivo`, value: `${motivo}`, inline: true })
    .setFooter({ text: `Você tem 1 min para esta ação!` })

    const b = new Discord.ButtonBuilder()
    .setLabel('Sim')
    .setStyle(3)
    .setCustomId('ss')
    const b1 = new Discord.ButtonBuilder()
    .setLabel('Não')
    .setStyle(4)
    .setCustomId('nn')

    const ac = new Discord.ActionRowBuilder()
    .addComponents(b, b1)

    const ai = await interaction.editReply({ embeds: [e], components: [ac] })

    
    const ccl = ai.createMessageComponentCollector({ time: 60000 }); // 1 Min pra responder.
    ccl.on('collect', async(ban) => {

        if(ban.user.id !== interaction.user.id) return;

        if(ban.customId === 'ss') {

            const e1 = new Discord.EmbedBuilder()
    .setTitle(`🔔 Banimento`)
    .setDescription(`Um novo usuário foi banido.`)
    .addFields({ name: `Autor`, value: `${interaction.member}`, inline: true },
    { name: `Membro`, value: `${user}`, inline: true },
    { name: `Motivo`, value: `**${motivo}**`, inline: false },)

    ban.update({ embeds: [e1], components: [] })

    interaction.guild.members.ban(membro, { reason: motivo }).catch(e => {
        
        const e2 = new Discord.EmbedBuilder()
        .setDescription(`🔴 | Não possível realizar o banimento de ${user}.`)

        ban.update({ embeds: [e2] }).then(()=>{ setTimeout(() => { interaction.deleteReply() }, 6000) })
        console.log(e)
    })

        }

        if(ban.customId === 'nn') {

            const e = new Discord.EmbedBuilder()
            .setDescription(`📑 *O banimento de ${user} foi cancelado por ${interaction.member}!*`)

            ban.update({ embeds: [e], components: [] })

        }
        
    });
   
  }
}