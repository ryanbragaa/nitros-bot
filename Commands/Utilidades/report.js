const Discord = require("discord.js");
const Config = require("../../config.json");

module.exports = {
    name: "denuncia",
    description: "Comando para resporta outro usuário",
    type: Discord.ApplicationCommandOptionType.ChatInput,
    options: [
        {
            name: "user",
            description: "pega o user",
            type: Discord.ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "motivo",
            description: "Motivo do report",
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction, app) => {
        const membro = interaction.options.getMember("user");
        const user = membro.user;
        const motivo = interaction.options.getString("motivo");

       
        if (interaction.user.id === user.id) {

            const e = new Discord.EmbedBuilder()
                .setDescription(`Não pode denunciar você mesmo.`)

            return interaction.reply({ embeds: [e], ephemeral: true })
        }

        if (client.user.id === user.id) {
            const e = new Discord.EmbedBuilder()
                .setDescription(`Não pode denunciar o Bot.`)

            return interaction.reply({ embeds: [e], ephemeral: true })
        }
        const Channel = interaction.guild.channels.cache.get(Config.channelLogs);


        interaction.reply({ embeds: [
          new Discord.EmbedBuilder()
          .setDescription(`${interaction.user}, sua denúncia foi enviada com sucesso ao canal <#${Channel}>.`)
        ], ephemeral: true })

        Channel.send({ embeds: [
          new Discord.EmbedBuilder()
          .setTitle(`Nova Denúncia Realizada!`)
          .setDescription(`Denúncia de ${interaction.user} para ${user}\n\n> Motivo: ${motivo} `)
        ] })



        }

    }
