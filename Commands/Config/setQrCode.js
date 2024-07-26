const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'setqr',
    description: 'Define a URL do QR code.',
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'url',
            type: Discord.ApplicationCommandOptionType.String,
            description: 'A nova URL do QR code.',
            required: true
        }
    ],
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            return interaction.reply({ content: 'Você não tem permissão para utilizar esse comando!', ephemeral: true });
        }

        const qrCodeUrl = interaction.options.getString('url');

        // Caminho para o arquivo de configuração
        const configPath = path.resolve(__dirname, '../../qrCodeConfig.json');

        // Ler o arquivo de configuração
        let config = {};
        try {
            config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        } catch (err) {
            console.error('Erro ao ler o arquivo de configuração:', err);
        }

        // Atualizar a URL do QR code
        config.qrCodeUrl = qrCodeUrl;

        // Escrever a nova configuração no arquivo
        try {
            fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
            await interaction.reply({ content: 'URL do QR code atualizada com sucesso!', ephemeral: true });
        } catch (err) {
            console.error('Erro ao escrever o arquivo de configuração:', err);
            await interaction.reply({ content: 'Erro ao atualizar a URL do QR code.', ephemeral: true });
        }
    }
};
