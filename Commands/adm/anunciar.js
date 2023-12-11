const Discord = require("discord.js")

module.exports = {
    name: "anunciar",
    description: "Anuncie algo em uma embed",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "título",
            description: "Escreva algo",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "descrição",
            description: "Escreva algo",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "chat",
            description: "Mencione um canal",
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true,
        },
        {
            name: "cargo",
            description: "Mencione um cargo",
            type: Discord.ApplicationCommandOptionType.Mentionable,
            required: false,
        },
        {
            name: "link",
            description: "Insira um link",
            type: Discord.ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: "cor",
            description: "Coloque uma cor em hexadecimal",
            type: Discord.ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: "imagem",
            description: "Coloque uma imagem",
            type: Discord.ApplicationCommandOptionType.String,
            required: false,
        }
    ],

    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
        } else {
            let titulo = interaction.options.getString("título")
            let desc = interaction.options.getString("descrição")
            let link = interaction.options.getString("link")
            let role = interaction.options.getRole("cargo")
            let cor = interaction.options.getString("cor")
            let img = interaction.options.getString("imagem")
            if (!cor) cor = "Random"
            let chat = interaction.options.getChannel("chat")
            if (Discord.ChannelType.GuildText !== chat.type) return interaction.reply(`❌ Este canal não é um canal de texto para enviar uma mensagem.`)

            let embed = new Discord.EmbedBuilder()
            .setTitle(titulo)
            .setDescription(desc)
            .setURL(link)
            .setColor(cor)
            .setThumbnail("https://cdn.discordapp.com/attachments/1170829861779152897/1175064945466015835/49cbfa6e860c2a253a1ba7d4d22f7e34.jpg?ex=6569df82&is=65576a82&hm=30af1fef6efe17bc603b92f39e61ca1f8040a90986fd3068b7b71a028503c34b&.svg")
            .setImage(img)
            .setTimestamp()
            

            chat.send({ embeds: [embed], content: `${role}` }).then( () => {
                interaction.reply({ content: `✔ Seu anúncio foi enviado em ${chat} com sucesso.`, ephemeral: true})
            }).catch( (e) => {
                interaction.reply(`❌ Algo deu errado.`)
            })
        }
    }
}