const Discord = require("discord.js");
const config = require('../../config.json');

module.exports = {
    name: "avatar",
    description: "Veja o avatar de algum usuario",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "user",
            description: "Menção ou ID do usuario",
            type: Discord.ApplicationCommandOptionType.User,
            require: true,
        }
    ],
    run: async (client, interaction) => {
        const userAvatar = interaction.options.getUser("user")
        const Avatarinfo = userAvatar.displayAvatarURL({ size: 4096, dynamic: true, format: "png" })
        
        const embed2 = new Discord.EmbedBuilder()
        .setAuthor({ name: `${config.nomeBot} - Avatar`})
        .setColor(config.color)
        .setTitle(`Avatar de ${userAvatar.username}`)
        .setImage(Avatarinfo)
        .setFooter({ text: `${config.footer}`, iconURL: `${config.avatar}` })

        const botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setLabel("Link")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL(Avatarinfo)
            .setEmoji("📩")
        )
        
    await interaction.reply({ embeds: [embed2], components: [botao] })
    }
}