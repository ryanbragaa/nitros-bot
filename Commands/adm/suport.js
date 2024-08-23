const Discord = require("discord.js");

module.exports = {
    name: "suporte",
    description: "abra o painel de suporte",
    type: Discord.ApplicationCommandType.ChatInput,
   

    run: async (client, interaction) => {

        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({content: `Você não tem permissão para utilizar esse comando!`, ephemeral: true  })
        } else {
            let embed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
            .setDescription(`Abra um ticket de suporte aqui no servidor clicando no botão abaixo:`)
            .setImage('https://media.discordapp.net/attachments/1170491793431859357/1276506440936198239/ticket_suporte.gif?ex=66c9c6c3&is=66c87543&hm=00b9030a2d18dcfb0ffb46cb562d5db6803d5a3f4241871dac5280320148b5af&=')


            let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setCustomId("suporte")
                .setEmoji("🛠️")
                .setLabel("Clique Aqui!")
                .setStyle(Discord.ButtonStyle.Primary)
            )

            interaction.reply({ content: `✔ Mensagem enviada!`, ephemeral: true })
            interaction.channel.send({ embeds: [embed], components: [botao] })
        }
        
    }
}