const { GatewayIntentBits, Partials } = require('discord.js');

const Discord = require('discord.js')
const { QuickDB } = require("quick.db")
const db = new QuickDB();

// importação dos comandos
const { readFileSync } = require('fs');

const config = require('./config.json')

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
        '32767'
    ]
});

module.exports = client

client.on('interactionCreate', (interaction) => {

    if (interaction.type === Discord.InteractionType.ApplicationCommand) {

        const cmd = client.slashCommands.get(interaction.commandName);

        if (!cmd) return interaction.reply({ content: `Erro, este comando não existe`, ephemeral: true });

        interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction)

    }
});

client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === "formulario") {
            if (!interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`))) return interaction.reply({ content: `O sistema está desativado`, ephemeral: true })
            const modal = new Discord.ModalBuilder()
                .setCustomId("modal")
                .setTitle("Formulário")

            const pergunta1 = new Discord.TextInputBuilder()
                .setCustomId("pergunta1")
                .setLabel("Qual a sua idade ?")
                .setMaxLength(30)
                .setMinLength(5)
                .setPlaceholder("Escreva sua resposta aqui.")
                .setRequired(true)
                .setStyle(Discord.TextInputStyle.Short)

            const pergunta2 = new Discord.TextInputBuilder()
                .setCustomId("pergunta2")
                .setLabel("Qual cargo você pretende ter ?")
                .setMaxLength(6)
                .setPlaceholder("Escreva sua resposta aqui.")
                .setRequired(true)
                .setStyle(Discord.TextInputStyle.Short)

            const pergunta3 = new Discord.TextInputBuilder()
                .setCustomId("pergunta3")
                .setLabel("Por que você quer trabalhar na Nistros Store ?")
                .setMaxLength(10)
                .setPlaceholder("Escreva sua resposta aqui.")
                .setRequired(true)
                .setStyle(Discord.TextInputStyle.Short)

            modal.addComponents(
                new Discord.ActionRowBuilder().addComponents(pergunta1),
                new Discord.ActionRowBuilder().addComponents(pergunta2),
                new Discord.ActionRowBuilder().addComponents(pergunta3)
            )

            await interaction.showModal(modal)
        }
    } else if (interaction.isModalSubmit()) {
        if (interaction.customId === "modal") {
            let resposta1 = interaction.fields.getTextInputValue("pergunta1")
            let resposta2 = interaction.fields.getTextInputValue("pergunta2")
            let resposta3 = interaction.fields.getTextInputValue("pergunta3")

            if (!resposta1) resposta1 = "Não informado."
            if (!resposta2) resposta2 = "Não informado."
            if (!resposta3) resposta3 = "Não informado."

            let embed = new Discord.EmbedBuilder()
                .setColor("Blue")
                .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`O usuário ${interaction.user} enviou o pedido abaixo:`)
                .addFields(
                    {
                        name: `Qual a sua idade ?`,
                        value: `*Resposta:* \`${resposta1}\``,
                        inline: false
                    },
                    {
                        name: `Qual cargo você pretende ter ?`,
                        value: `*Resposta:* \`${resposta2}\``,
                        inline: false
                    },
                    {
                        name: `Por que você quer trabalhar na Nistros Store ?`,
                        value: `*Resposta:* \`${resposta3}\``,
                        inline: false
                    }
                )

            interaction.reply({ content: `Olá **${interaction.user.username}**, seu formulário foi enviado com sucesso!`, ephemeral: true })
            await interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`)).send({ embeds: [embed] })
        }
    }
})


///Ticket

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

///


client.on("ready", () => {
    let react = [
        `Nitros`,
        `Criado Por: Braga`,
        `Suporte 24 horas`,
        `🌐 Versão: v${require('discord.js').version.slice(0, 6)}`
    ],
        fera = 0;
    setInterval(() => client.user.setPresence({
        activities: [{
            name: `${react[fera++ % react.length]}`,
            type: Discord.ActivityType.Streaming,
            url: 'https://www.twitch.tv/discord'
        }]
    }), 15000);

    client.user
        .setStatus("online");
});

client.slashCommands = new Discord.Collection()

require('./handler')(client)


// Login do bot
client.once('ready', () => {
    console.log(`Bot está online como ${client.user.tag}!`);
});
client.login(config.TOKEN)

client.on("interactionCreate", require('./events/canaisCompras.js').execute);

process.on('uncaughtExceptionMonitor', (error, origin) => { });
process.on('unhandledRejection', (reason, p) => {
    console.log('=====[ ANTI CRASH 1 ]=====')
    console.log(reason, p)
    console.log('==========================')
})

process.on("uncaughtException", (err, origin) => {
    console.log('=====[ ANTI CRASH 2 ]=====')
    console.log(err, origin)
    console.log('========================')
})

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('=====[ ANTI CRASH 3 ]=====')
    console.log(err, origin)
    console.log('========================')
}) 
