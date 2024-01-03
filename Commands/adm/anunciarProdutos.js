const Discord = require("discord.js")

module.exports = {
    name: "anunciar_produtos",
    description: "Anuncie algo em uma embed",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "produto",
            description: "Escreva o nome do produto",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "descrição",
            description: "Escreva o preço",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "preço",
            description: "Escreva o valor",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "stock",
            description: "Escreva a quantidade",
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
            let titulo = interaction.options.getString("produto")
            let desc = interaction.options.getString("descrição")
            let pre = interaction.options.getString("preço")
            let stk = interaction.options.getString("stock")
            let role = interaction.options.getRole("cargo")
            let cor = interaction.options.getString("cor")
            let img = interaction.options.getString("imagem")
            if (!cor) cor = "Random"
            if (!role) role = ""
            let chat = interaction.options.getChannel("chat")
            if (Discord.ChannelType.GuildText !== chat.type) return interaction.reply(`❌ Este canal não é um canal de texto para enviar uma mensagem.`)

            let embed = new Discord.EmbedBuilder()
            .setTitle(titulo)
            .setDescription(desc)
            .addFields(
            { name: '\u200B', value: '\u200B' },
            {name: `Preço <a:dinheiro_rdk:1191941211217477745>`, value: `${pre}`},
            {name: `Stock <:Carrinho:1186380684722450442>`, value: `${stk}`},
            )
            .setFooter({ text: "discord.gg/NitrosStore" })
            .setColor(cor)
            .setThumbnail("https://cdn.discordapp.com/attachments/1190080248713318491/1190491575541837865/BS_STORE_LOGO_4.jpg?ex=65a1fead&is=658f89ad&hm=da33b76d34ddead113a8badd80d6c6a2279b2e422686d0e85a09fc55aa8525b0&")
            .setImage(img)
            

            chat.send({ embeds: [embed], content: `${role}` }).then( () => {
                interaction.reply({ content: `✔ Seu anúncio foi enviado em ${chat} com sucesso.`, ephemeral: true})
            }).catch( (e) => {
                interaction.reply(`❌ Algo deu errado.`)
            })
        }
    }
}