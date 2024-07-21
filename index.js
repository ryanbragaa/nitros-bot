const { GatewayIntentBits, Partials } = require("discord.js");

const Discord = require('discord.js')
const { QuickDB } = require("quick.db")
const db = new QuickDB();

// importação dos comandos
const { readFileSync } = require('fs');

// const config = require('./config.json')

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




// fs events

const fs = require('fs');

fs.readdir('./Events', (err, file) => {
    file.forEach(event => {
        require(`./Events/${event}`)
    })
})

//

client.slashCommands = new Discord.Collection()

require('./handler')(client)


client.on("interactionCreate", require('./Events/canaisCompras.js').execute);

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
