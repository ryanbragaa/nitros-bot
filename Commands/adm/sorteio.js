const Discord = require("discord.js");
const ms = require("ms");


module.exports = {
    name: "sorteio",
    description: "Crie um sorteio no servidor",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "prêmio",
            description: "Qual será o prêmio",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "descrição",
            description: "Descrição do prêmio",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "cor",
            description: "Defina a cor da embed",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "tempo",
            description: "Selecione o tempo do sorteio",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: "30 Segundos",
                    value: "30s",
                },
                {
                    name: "1 minuto",
                    value: "1m",
                },
                {
                    name: "5 Minutos",
                    value: "5m",
                },
                {
                    name: "10 Minutos",
                    value: "10m",
                },
                {
                    name: "15 Minutos",
                    value: "15m",
                },
                {
                    name: "30 Minutos",
                    value: "30m",
                },
                {
                    name: "45 Minutos",
                    value: "45m",
                },
                {
                    name: "1 Hora",
                    value: "1h",
                },
                {
                    name: "2 Hora",
                    value: "2h",
                },
                {
                    name: "5 Hora",
                    value: "5h",
                },
                {
                    name: "12 Hora",
                    value: "12h",
                },
                {
                    name: "1 dia",
                    value: "24h",
                },
                {
                    name: "3 dias",
                    value: "72h",
                },
                {
                    name: "1 Semana",
                    value: "168h",
                },
            ],
        },
        {
            name: "imagem",
            description: "Coloque uma imagem",
            type: Discord.ApplicationCommandOptionType.String,
            required: false,
        }
    ],

    run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {

            interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })

        } else {
            let premio = interaction.options.getString("prêmio");
            let tempo = interaction.options.getString("tempo");
            let desc = interaction.options.getString("descrição");
            let cor = interaction.options.getString("cor")
            let img = interaction.options.getString("imagem");

            let duracao = ms(tempo);

            let button = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setCustomId("botao")
                .setEmoji("🎉")
                .setStyle(Discord.ButtonStyle.Secondary)
            );

            let click = [];


            let embed = new Discord.EmbedBuilder()
            .setAuthor({ name: `Novo sorteio!`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .setDescription(`Patrocinador: ${interaction.user}.
             Prêmio: **${premio}.**
            
             ${desc}
            
             Tempo: \`${tempo}\`.

            **Clique no botão para participar**.\n\n**Boa sorte!**`)
            .setTimestamp(Date.now() + ms(tempo))
            .setFooter({ text: "Data do sorteio:" })
            .setColor(cor)
            .setImage(img);


            let erro = new Discord.EmbedBuilder()
            .setColor("Red")
            .setDescription(`Não foi possivel promover o sorteio!`);

            const msg = await interaction.reply({ embeds: [embed], components: [button] }).catch((e) => {
                interaction.reply({ embeds: [erro] });
            });

            const coletor = msg.createMessageComponentCollector({
                time: ms(tempo),
            });

            coletor.on("end", (i) => {
                interaction.editReply({ components: [
                        new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                            .setDisabled(true)
                            .setCustomId("botao")
                            .setEmoji("🎉")
                            .setStyle(Discord.ButtonStyle.Secondary)
                        )
                    ],
                });
            });


            coletor.on("collect", (i) => {

                if (i.customId === "botao") {
                    
                    if (click.includes(i.user.id)) return i.reply({ content: `Olá ${interaction.user}, você ja está participando do sorteio.`, ephemeral: true});

                    click.push(i.user.id);

                    interaction.editReply({ embeds: [embed] });

                    i.reply({ content: `Olá ${interaction.user}, você entrou no sorteio.`, ephemeral: true });
                }
            });


            setTimeout(() => {
                let ganhador = click[Math.floor(Math.random() * click.length)];


                if (click.length == 0) return interaction.followUp(`\n**SORTEIO CANCELADO!**\nNão houveram participantes no sorteio \`${premio}\`.`);

                interaction.followUp(`**Parabéns <@${ganhador}> você ganhou o sorteio: \`${premio}\`.**`);

            }, duracao);
        }
    },
};