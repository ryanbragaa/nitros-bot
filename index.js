const { GatewayIntentBits, Partials } = require('discord.js');

const Discord = require('discord.js')

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
