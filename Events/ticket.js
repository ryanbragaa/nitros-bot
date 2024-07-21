require('../index')
const Discord = require('discord.js')
const client = require('../index')

const { QuickDB } = require("quick.db")
const db = new QuickDB();
const config = require('../config.json')




module.exports = client.on("interactionCreate", (interaction) => {
    if (interaction.isStringSelectMenu()) {
        if (interaction.customId === "painel_ticket") {

            


            let opc = interaction.values[0];
            if (opc === "opc1") {

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Nova opção
                const nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Instagram.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)
                            
                        let botao = new Discord.ButtonBuilder()
                            .setCustomId("fechar_ticket")
                            .setEmoji("🔒")
                            .setStyle(Discord.ButtonStyle.Danger);
                     
                        let botao2 = new Discord.ButtonBuilder()
                            .setCustomId("venda_realizada")
                            .setEmoji("✅")
                            .setStyle(Discord.ButtonStyle.Success);

                        
                    
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }

            } else if (opc === "opc2") {

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Nova opção

                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção TikTok.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`);
                            
                        let botao = new Discord.ButtonBuilder()
                            .setCustomId("fechar_ticket")
                            .setEmoji("🔒")
                            .setStyle(Discord.ButtonStyle.Danger);
                     
                        let botao2 = new Discord.ButtonBuilder()
                            .setCustomId("venda_realizada")
                            .setEmoji("✅")
                            .setStyle(Discord.ButtonStyle.Success);
                    
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo} ` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc3") {

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Nova opção

                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Youtube.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)
                            
                        let botao = new Discord.ButtonBuilder()
                            .setCustomId("fechar_ticket")
                            .setEmoji("🔒")
                            .setStyle(Discord.ButtonStyle.Danger);
                     
                        let botao2 = new Discord.ButtonBuilder()
                            .setCustomId("venda_realizada")
                            .setEmoji("✅")
                            .setStyle(Discord.ButtonStyle.Success);
                    
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc4") {
                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Ativação Nitro.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)
                            
                        let botao = new Discord.ButtonBuilder()
                            .setCustomId("fechar_ticket")
                            .setEmoji("🔒")
                            .setStyle(Discord.ButtonStyle.Danger);
                     
                        let botao2 = new Discord.ButtonBuilder()
                            .setCustomId("venda_realizada")
                            .setEmoji("✅")
                            .setStyle(Discord.ButtonStyle.Success);
                    
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc5") {
                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Conta Discord.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)
                            
                        let botao = new Discord.ButtonBuilder()
                            .setCustomId("fechar_ticket")
                            .setEmoji("🔒")
                            .setStyle(Discord.ButtonStyle.Danger);
                     
                        let botao2 = new Discord.ButtonBuilder()
                            .setCustomId("venda_realizada")
                            .setEmoji("✅")
                            .setStyle(Discord.ButtonStyle.Success);
                    
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc6") {
                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Nitro-mensal.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)

                        let botao = new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger);
                         
                        let botao2 = new Discord.ButtonBuilder()
                                .setCustomId("venda_realizada")
                                .setEmoji("✅")
                                .setStyle(Discord.ButtonStyle.Success);
                        
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc7") {
                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Nitro-Trimensal.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)

                        let botao = new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger);
                         
                        let botao2 = new Discord.ButtonBuilder()
                                .setCustomId("venda_realizada")
                                .setEmoji("✅")
                                .setStyle(Discord.ButtonStyle.Success);
                        
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc8") {
                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Nitro-Gift-Mensal.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)

                        let botao = new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger);
                         
                        let botao2 = new Discord.ButtonBuilder()
                                .setCustomId("venda_realizada")
                                .setEmoji("✅")
                                .setStyle(Discord.ButtonStyle.Success);
                        
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc9") {
                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Serviços de Streaming.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)

                        let botao = new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger);
                         
                        let botao2 = new Discord.ButtonBuilder()
                                .setCustomId("venda_realizada")
                                .setEmoji("✅")
                                .setStyle(Discord.ButtonStyle.Success);
                        
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc10") {
                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Sala personalizada Free fire.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)

                        let botao = new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger);
                         
                        let botao2 = new Discord.ButtonBuilder()
                                .setCustomId("venda_realizada")
                                .setEmoji("✅")
                                .setStyle(Discord.ButtonStyle.Success);
                        
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc11") {
                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Ativação Windows.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)

                        let botao = new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger);
                         
                        let botao2 = new Discord.ButtonBuilder()
                                .setCustomId("venda_realizada")
                                .setEmoji("✅")
                                .setStyle(Discord.ButtonStyle.Success);
                        
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc12") {
                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Cidade Mta.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)

                        let botao = new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger);
                         
                        let botao2 = new Discord.ButtonBuilder()
                                .setCustomId("venda_realizada")
                                .setEmoji("✅")
                                .setStyle(Discord.ButtonStyle.Success);
                        
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
                    })
                }
            } else if (opc === "opc13") {
                let nome = `📨-${interaction.user.username}`;
                let categoria = "1172556019486961774"
                let cargo = "<@&1187492477104562186>"

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
                            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção Bots Discord.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
                            .setImage(`${config.QrCode}`)

                        let botao = new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Danger);
                         
                        let botao2 = new Discord.ButtonBuilder()
                                .setCustomId("venda_realizada")
                                .setEmoji("✅")
                                .setStyle(Discord.ButtonStyle.Success);
                        
                        const row = new Discord.ActionRowBuilder().addComponents(botao, botao2);

                        ch.send({ embeds: [embed], components: [row], content: `${cargo}` }).then(m => {
                            m.pin()
                        })
                        ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" })
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