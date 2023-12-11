const Discord = require("discord.js")
const { QuickDB } = require("quick.db")
const db = new QuickDB()


module.exports = {
    name: "canalentrada_config",
    description: "Configuração",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "canalentrada",
            description: "Canal de boas vindas",
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],

    run: async (client, interaction) => {

        const canalentrada = interaction.options.getChannel("canalentrada")

        await db.set(`canal_entrada_${interaction.guild.id}`, canalentrada.id)


        let embed = new Discord.EmbedBuilder()
        .setColor("Blue")
        .setTitle("Canal configurado!")
        .addFields({ name: `> Canal de boas vindas`, value: `${`canalentrada`}` })

        interaction.reply({ embeds: [embed], ephemeral: true })

    }
}