const Discord = require("discord.js");
const { QuickDB } = require("quick.db")
const db = new QuickDB()


module.exports = {
    name: "verificação",
    description: "Abra o painel para verificar usúarios",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "cargo_verificado",
            description: "Mencione um cargo para o membro receber",
            type: Discord.ApplicationCommandOptionType.Role,
            required: false,
        },
        {
            name: "chat",
            description: "escolha o canal para enviar o painel",
            type: Discord.ApplicationCommandOptionType.Channel,
            required: false,
        }
        
    ],

    run: async (client, interaction) => {
        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({ content: `Você não tem permissão para utilizar este comando.`, ephemeral: true })
        } else {

            let chat = interaction.options.getChannel("chat")
            if(!chat) chat = interaction.channel;

            let cargo = interaction.options.getRole('cargo_verificado');
            await db.set(`cargo_verificação_${interaction.guild.id}`, cargo.id)

            const embed_ephemeral = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setDescription(`Olá ${interaction.user}, o sistema foi ativado com sucesso!`)

            const embed_verificacao = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
            .setDescription('<:carrinho:1191950829217910894> \ Clique no botão abaixo para receber o cargo e ser verificado')
            .setImage("https://media.discordapp.net/attachments/1267908348146352209/1269024542223765665/convite_nistros_3.jpg?ex=66ae8eb4&is=66ad3d34&hm=7feac9dbe2ef6b97e1e7d6895d8588eb4c2ca7caea6d3b4d40d378423e21c062&=&format=webp")

            let button = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setCustomId("verificar")
                .setEmoji("✅")
                .setLabel("Verifique-se")
                .setStyle(Discord.ButtonStyle.Primary)
            )    

            

            interaction.reply({ embeds: [ embed_ephemeral], ephemeral: true }).then( () => {
                chat.send({ embeds: [embed_verificacao], components: [button] })
            })
        }


        
        
    }
}