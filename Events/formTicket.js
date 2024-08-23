const Discord = require('discord.js');
const client = require('../index');
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const transcript = require('discord-html-transcripts');
const { ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');

const channeltranscriptputo = "1254922783020814366";
const canal_logsVendas = "1170515428787879937"


// Função para criar o ticket
module.exports = async (interaction, nome, categoria, cargo, descricaoOpcao) => {
    if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

    if (interaction.guild.channels.cache.find(c => c.name === nome)) {
        return interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true });
    }

    try {
        const ch = await interaction.guild.channels.create({
            name: nome,
            type: Discord.ChannelType.GuildText,
            parent: categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [Discord.PermissionFlagsBits.ViewChannel]
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
        });

        // Armazena o nome do usuário que abriu o ticket no banco de dados
        await db.set(`ticket_${ch.id}_owner`, interaction.user.username);

        await interaction.reply({ content: `✔ Olá ${interaction.user}, seu ticket foi aberto em ${ch}`, ephemeral: true });

        const embed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção ${descricaoOpcao}.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
            .setImage(config.qrCodeUrl);

        const botaoFechar = new Discord.ButtonBuilder()
            .setCustomId("fechar_ticket")
            .setEmoji("🔒")
            .setStyle(Discord.ButtonStyle.Danger);

        const botaoVenda = new Discord.ButtonBuilder()
            .setCustomId("venda_realizada")
            .setEmoji("✅")
            .setStyle(Discord.ButtonStyle.Success);

        const row = new Discord.ActionRowBuilder().addComponents(botaoFechar, botaoVenda);

        const message = await ch.send({ embeds: [embed], components: [row], content: `${cargo}` });
        await message.pin();
        await ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" });
    } catch (error) {
        console.error('Erro ao criar o canal de ticket:', error);
    }
};

// Listener de interação
client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton() && interaction.customId === "venda_realizada") {
        
        // Recupera o nome do usuário que abriu o ticket
        // const ticketOwner = await db.get(`ticket_${interaction.channel.id}_owner`);
        // const cupomUsado = await db.get(`cupom_${cupomUsado}_inserido`)
        
        const modal = new Discord.ModalBuilder()
            .setCustomId("modalDois")
            .setTitle("Formulário De Venda");

        const pergunta2 = new Discord.TextInputBuilder()
            .setCustomId("pergunta2")
            .setLabel("Qual produto foi comprado?")
            .setMaxLength(20)
            .setPlaceholder("Escreva sua resposta aqui.")
            .setRequired(true)
            .setStyle(Discord.TextInputStyle.Short);

        const pergunta3 = new Discord.TextInputBuilder()
            .setCustomId("pergunta3")
            .setLabel("Qual valor foi pago?")
            .setMaxLength(20)
            .setPlaceholder("Escreva sua resposta aqui.")
            .setRequired(true)
            .setStyle(Discord.TextInputStyle.Short);

        modal.addComponents(
            new Discord.ActionRowBuilder().addComponents(pergunta2),
            new Discord.ActionRowBuilder().addComponents(pergunta3)
        );

        await interaction.showModal(modal);
        
    } else if (interaction.isModalSubmit()) {
        const ticketOwner = await db.get(`ticket_${interaction.channel.id}_owner`);
        const cupomUsado = await db.get(`cupom_${interaction.user.id}_Usado`);
        if (interaction.customId === "modalDois") {
            let resposta2 = interaction.fields.getTextInputValue("pergunta2");
            let resposta3 = interaction.fields.getTextInputValue("pergunta3");

            if (!resposta2) resposta2 = "Não informado.";
            if (!resposta3) resposta3 = "Não informado.";

            const embed = new Discord.EmbedBuilder()
                .setColor("Blue")
                .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`O usuário ${interaction.user} enviou o formulário de venda abaixo:`)
                .addFields(
                    {
                        name: `Quem realizou a compra?`,
                        value: `👤\ *Membro* : \ @${ticketOwner}`,
                        inline: false
                    },
                    {
                        name: `Qual produto foi comprado?`,
                        value: `🛒\ *Produto:* \`${resposta2}\``,
                        inline: false
                    },
                    {
                        name: `Qual valor foi pago?`,
                        value: `💰\ *Valor R$:* \`${resposta3}\``,
                        inline: false
                    },
                    {
                        name: `Qual cupom foi utilizado?`,
                        value: `🎫\ *Cupom:*  \`${cupomUsado}\``,
                        inline: false
                    }
                );

            const canaltranscript = interaction.channel;

            const file = await transcript.createTranscript(canaltranscript, {
                limit: -1,
                returnBuffer: false,
                fileName: `${canaltranscript.name.toLowerCase()}-transcript.html`,
                saveImage: true,
                poweredBy: false
            });

            let cache = client.channels.cache.get(`${channeltranscriptputo}`);

            let msg = await cache.send({ files: [file] });

            const button = new ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                .setLabel("Open")
                .setURL(`https://mahto.id/chat-exporter?url=${msg.attachments.first()?.url}`)
                .setStyle(Discord.ButtonStyle.Link),

                new Discord.ButtonBuilder()
                .setLabel("Download")
                .setURL(`${msg.attachments.first()?.url}`)
                .setStyle(Discord.ButtonStyle.Link)
            );

            interaction.reply({ content: `Olá **${interaction.user.username}**, sua log de venda foi enviada com sucesso!`, ephemeral: true });
            await interaction.guild.channels.cache.get(`${canal_logsVendas}`).send({ embeds: [embed], components: [button] });
        }
    } else if (interaction.isButton() && interaction.customId === "fechar_ticket") {
        interaction.reply(`Olá ${interaction.user}, este ticket será excluído em 5 segundos... `);
        setTimeout(() => {
            try {
                interaction.channel.delete();
            } catch (e) {
                return;
            }
        }, 5000);
    }
});
