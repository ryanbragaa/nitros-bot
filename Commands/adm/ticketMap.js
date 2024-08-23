const Discord = require("discord.js");
const ticketOptions = require('../../Commands/adm/mappings/ticketOptions');
const config = require('../../config.json');

const emojiMap = {
    "opc1": "📱",
    "opc2": "📱",
    "opc3": "📽️",
    "opc4": "💳⚡",
    "opc5": "📩",
    "opc6": "⚡",
    "opc7": "⚡",
    "opc8": "⚡",
    "opc9": "📺",
    "opc10": "🏷️",
    "opc11": "🔑💻",
    "opc12": "🏘️",
    "opc13": "🤖"
};

module.exports = {
    name: "ticket",
    description: "Abra o painel de tickets",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            return interaction.reply({ content: `Você não tem permissão para utilizar esse comando!`, ephemeral: true });
        }

        let embed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
            .setImage(`https://media.discordapp.net/attachments/1170491793431859357/1266450131838963793/UM_TICKET.gif?ex=66a53118&is=66a3df98&hm=3e01458086cce5b618f4b11d498fb0270c2b9c077ca5cfe12865c6e5fe6aa986&=&width=831&height=467`)
            .setDescription(`Abra um ticket aqui no servidor selecionando uma das opções abaixo:`);

        let painel = new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
                .setCustomId("painel_ticket")
                .setPlaceholder("Clique Aqui!")
                .addOptions(
                    Object.entries(ticketOptions).map(([value, label]) => ({
                        label: `${emojiMap[value]} ${label}`,
                        description: `Abra um ticket na opção ${label}.`,
                        value
                    }))
                )
        );

        interaction.reply({ content: `✔ Mensagem enviada!`, ephemeral: true });
        interaction.channel.send({ embeds: [embed], components: [painel] });
    }
};
