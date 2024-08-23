require('../index')

const Discord = require('discord.js')
const client = require('../index')


client.on("interactionCreate", (interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === "suporte") {


            let nome = `📨-${interaction.user.username}`;
            let categoria = "1174334447957590166"
            let cargo = "<@&1170491792668504099>"

            if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

            if (interaction.guild.channels.cache.find(c => c.name === nome)) {
                interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
            } else {
                interaction.guild.channels.create({
                    name: nome,
                    type: Discord.ChannelType.GuildText,
                    parent: categoria,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [
                                Discord.PermissionFlagsBits.ViewChannel
                            ]
                        },
                        {
                            id: interaction.user.id,
                            allow: [
                                Discord.PermissionFlagsBits.ViewChannel,
                                Discord.PermissionFlagsBits.SendMessages,
                                Discord.PermissionFlagsBits.AttachFiles,
                                Discord.PermissionFlagsBits.EmbedLinks,
                                Discord.PermissionFlagsBits.AddReactions
                            ]
                        }
                    ]
                }).then((ch) => {
                    interaction.reply({ content: `✔ Olá ${interaction.user}, seu ticket de  suporte foi aberto em ${ch}`, ephemeral: true })
                    let embed = new Discord.EmbedBuilder()
                        .setColor("Blue")
                        .setDescription(`Olá ${interaction.user}, você abriu o ticket de suporte.`);
                    let botao = new Discord.ActionRowBuilder().addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("fechar_ticket")
                            .setEmoji("🔒")
                            .setStyle(Discord.ButtonStyle.Danger)
                    );

                    ch.send({ embeds: [embed], components: [botao], content: `${cargo}` }).then(m => {
                        m.pin()
                    })
                })
            }


        }
    } else if (interaction.isButton()) {
        if (interaction.customId === "fechar_ticket") {
            interaction.reply(`Olá ${interaction.user}, este ticket será excluído em 5 segundos... `)
            setTimeout(() => {
                try {
                    interaction.channel.delete()
                } catch (e) {
                    return;
                }
            }, 5000);
        }
    }
})