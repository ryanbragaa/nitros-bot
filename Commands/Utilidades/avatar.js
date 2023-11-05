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
        let userAvatar = interaction.options.getUser("user")
        let Avatarinfo = userAvatar.displayAvatarURL({ size: 4096, dynamic: true, format: "png" })

        let ryan = new Discord.EmbedBuilder()
            .setColor(config.color)
            .setTitle(`Avatar de ${userAvatar.username}`)
            .setImage(Avatarinfo)
            .setFooter({ text: `${config.footer}`, iconURL: `${config.avatar}` })
        
        let download = new ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Link")
                .setStyle(Discord.ButtonStyle.Link)
                .setURL(Avatarinfo)
                .setEmoji("📩")
        )
        
        interaction.reply({ embeds: [ryan], components: [download] })
    }
}