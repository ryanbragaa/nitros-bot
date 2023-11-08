const Discord = require("discord.js");
const { url } = require("sourcebin");
const Config = require("../../config.json");

module.exports = {
    name: "ticket",
    description: "Comando para abrir ticket de compra",
    type: Discord.ApplicationCommandOptionType.ChatInput,
    options: [
        {
            name: "produto",
            description: "Digite o nome do produto",
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "quantidade",
            description: "quantidade do produto",
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction, app) => {
        const produtos = interaction.options.getString("produto");
        const produto = produtos;
        const quantidade = interaction.options.getString("quantidade");

       
        const Channel = interaction.guild.channels.cache.get(Config.logsVendas);


        interaction.reply({ embeds: [
          new Discord.EmbedBuilder()
          .setDescription(`${interaction.user}, seu pedido foi enviado com sucesso ao canal ${Channel}.`)
          .setColor("Blue")
          .setTimestamp()
          .setFooter({ text: 'Direitos reservados a © Nitros Store', iconURL: 'https://cdn.discordapp.com/attachments/1170829861779152897/1171520256041291797/emoji_nitros_dois-removebg-preview.png?ex=655cfa42&is=654a8542&hm=da3c1032782999e01bf13034bffbe801294c8003dcc1a5d2621238cf5ec3d87c&.png' })
        ], ephemeral: true })

        Channel.send({ embeds: [
          new Discord.EmbedBuilder()
          .setTitle(`Novo Pedido Realizado!`)
          .setDescription(`Pedido de  ${interaction.user} do produto ${produto}\n\n> quantidade: ${quantidade} `)
          .setTimestamp()
          .setColor("Blue")
        ] })



        }

    }
