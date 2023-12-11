require('../index')
const Discord = require('discord.js')
const client = require('../index')



client.on("interactionCreate", (interaction) => {
    if (interaction.isStringSelectMenu()) {
        if (interaction.customId === "painel_ticket") {
            let opc = interaction.values[0];
            if (opc === "opc1") {

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Nova opção

                let nome = `📨-${interaction.user.id}`;
                let categoria = "1172556019486961774"

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
                        interaction.reply({ content: `✔ Olá ${interaction.user}, seu ticket foi aberto em ${ch}`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("Blue")
                            .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção Instagram.`);
                        let botao = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger)
                        );

                        ch.send({ embeds: [embed], components: [botao] }).then(m => {
                            m.pin()
                        })
                    })
                }

            } else if (opc === "opc2") {

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Nova opção

                let nome = `📨-${interaction.user.id}`;
                let categoria = "1172556019486961774"

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
                        interaction.reply({ content: `✔ Olá ${interaction.user}, seu ticket foi aberto em ${ch}`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("Blue")
                            .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção TikTok.`);
                        let botao = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger)
                        );

                        ch.send({ embeds: [embed], components: [botao] }).then(m => {
                            m.pin()
                        })
                    })
                }
            } else if (opc === "opc3") {

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Nova opção

                let nome = `📨-${interaction.user.id}`;
                let categoria = "1172556019486961774"

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
                        interaction.reply({ content: `✔ Olá ${interaction.user}, seu ticket foi aberto em ${ch}`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("Blue")
                            .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção Youtube.`);
                        let botao = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger)
                        );

                        ch.send({ embeds: [embed], components: [botao] }).then(m => {
                            m.pin()
                        })
                    })
                }
            } else if (opc === "opc4") {
                let nome = `📨-${interaction.user.id}`;
                let categoria = "1172556019486961774"

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
                        interaction.reply({ content: `✔ Olá ${interaction.user}, seu ticket foi aberto em ${ch}`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("Blue")
                            .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção Nitro-Mensal.`);
                        let botao = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger)
                        );

                        ch.send({ embeds: [embed], components: [botao] }).then(m => {
                            m.pin()
                        })
                    })
                }
            } else if (opc === "opc5") {
                let nome = `📨-${interaction.user.id}`;
                let categoria = "1172556019486961774"

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
                        interaction.reply({ content: `✔ Olá ${interaction.user}, seu ticket foi aberto em ${ch}`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("Blue")
                            .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção Nitro-Trimensal.`);
                        let botao = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger)
                        );

                        ch.send({ embeds: [embed], components: [botao] }).then(m => {
                            m.pin()
                        })
                    })
                }
            } else if (opc === "opc6") {
                let nome = `📨-${interaction.user.id}`;
                let categoria = "1172556019486961774"

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
                        interaction.reply({ content: `✔ Olá ${interaction.user}, seu ticket foi aberto em ${ch}`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("Blue")
                            .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção Serviços de Streaming.`);
                        let botao = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger)
                        );

                        ch.send({ embeds: [embed], components: [botao] }).then(m => {
                            m.pin()
                        })
                    })
                }
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