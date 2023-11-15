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
            .setDescription(`Abra um ticket de suporte aqui no servidor clicando no botão abaixo:`);


            let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setCustomId("suporte")
                .setEmoji("⚙")
                .setLabel("Clique Aqui!")
                .setStyle(Discord.ButtonStyle.Primary)
            )

            interaction.reply({ content: `✔ Mensagem enviada!`, ephemeral: true })
            interaction.channel.send({ embeds: [embed], components: [botao] })
        }
        
    }
}