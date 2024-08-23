require('../index');
const Discord = require('discord.js');
const client = require('../index');
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const config = require('../config.json');
const path = require('path');
const fs = require('fs');



const ticketOptions = require('../Commands/adm/mappings/ticketOptions'); // Caminho para o arquivo de mapeamento

module.exports = criarTicket = async (interaction, nome, categoria, cargo, descricaoOpcao) => {

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

        await db.set(`ticket_${ch.id}_owner`, interaction.user.username);

        await interaction.reply({ content: `✔ Olá ${interaction.user}, seu ticket foi aberto em ${ch}`, ephemeral: true });

        const configPath = path.resolve(__dirname, '../qrCodeConfig.json');
        
        // Ler o arquivo de configuração
        let config = {};
        try {
            config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        } catch (err) {
            console.error('Erro ao ler o arquivo de configuração:', err);
        }

        const embed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setDescription(`🛒 Olá ${interaction.user}, você abriu o ticket pela opção ${descricaoOpcao}.\n\n 💳  Realize o pagamento lendo o QR Code abaixo ou copiando o email\n\n 📩  storenitros7@gmail.com`)
            .setImage(config.qrCodeUrl);

        const botaoFechar = new Discord.ButtonBuilder()
            .setCustomId("fechar_ticket")
            .setLabel("Fechar Ticket")
            .setEmoji("🔒")
            .setStyle(Discord.ButtonStyle.Danger);

        const botaoVenda = new Discord.ButtonBuilder()
            .setCustomId("venda_realizada")
            .setLabel("Venda Realizada")
            .setEmoji("✅")
            .setStyle(Discord.ButtonStyle.Success);

        const inserirCupom = new Discord.ButtonBuilder()
            .setCustomId("Cupom")
            .setLabel("Cupom")
            .setEmoji("🎫")
            .setStyle(Discord.ButtonStyle.Primary)

        const row = new Discord.ActionRowBuilder().addComponents(botaoFechar, botaoVenda, inserirCupom);

        const message = await ch.send({ embeds: [embed], components: [row], content: `${cargo}`}); //, content: `${cargo}` 
        await message.pin();
        await ch.send({ content: "✉ Chave Pix Email: storenitros7@gmail.com" });
    } catch (error) {
        console.error('Erro ao criar o canal de ticket:', error);
    }
};



client.on("interactionCreate", async (interaction) => {
    if (interaction.isStringSelectMenu() && interaction.customId === "painel_ticket") {
        const opc = interaction.values[0];
        const descricaoOpcao = ticketOptions[opc] || "Desconhecida"; // Obtém a descrição ou usa "Desconhecida" se a opção não estiver mapeada
        const nome = `📩丨${interaction.user.username}`;
        const categoria = "1172556019486961774";
        const cargo = "<@&1187492477104562186>";
        module.exports = { nome }
        await criarTicket(interaction, nome, categoria, cargo, descricaoOpcao);
    } 
    
});
