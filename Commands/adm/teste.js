const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, embedLength } = require("@discordjs/builders");
const { ButtonStyle } = require("discord.js");
const Discord = require("discord.js");
const config = require('../../config.json');

module.exports = {
    name: "teste",
    description: "testando",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        if(interaction.commandName === "teste"){

            // const embed = new Discord.EmbedBuilder()
            // .setColor("Blue")
            // .setTitle("Deseja comprar qual produto")
            // .setAuthor({name: 'Comprar'})
            await interaction.reply({
                content: 'Button!',
                components: [
                    new ActionRowBuilder().setComponents(
                        new ButtonBuilder()
                        .setCustomId('buttonOne')
                        .setLabel('Comprar')
                        .setStyle(ButtonStyle.Success)
                    )
                ]
            });
        }
        
    }
}

