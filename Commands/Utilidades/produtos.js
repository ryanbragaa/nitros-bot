const Discord = require("discord.js");
const config = require('../../config.json');

module.exports = {
	name: "produtos",
	description: "Produtos disponiveis",
	type: Discord.ApplicationCommandType.ChatInput,

	run: async (client, interaction) => {
		const exampleEmbed = new Discord.EmbedBuilder()
		.setColor("Blue")
		.setTitle("Nossos Produtos")
		.setURL('https://cdn.discordapp.com/attachments/1170829861779152897/1171518036277215303/nitros-img-melhorada.jpg?ex=655cf831&is=654a8331&hm=235906078b24a8cfe1f26b3e56ce82440cc9cd11bba8c4000f9722e4a59c6ca3&')
		.setAuthor({ name: 'NITROS STORE', iconURL: 'https://cdn.discordapp.com/attachments/1170829861779152897/1171520256041291797/emoji_nitros_dois-removebg-preview.png?ex=655cfa42&is=654a8542&hm=da3c1032782999e01bf13034bffbe801294c8003dcc1a5d2621238cf5ec3d87c&.png'})
		.setThumbnail('https://cdn.discordapp.com/attachments/1170829861779152897/1171518036277215303/nitros-img-melhorada.jpg?ex=655cf831&is=654a8331&hm=235906078b24a8cfe1f26b3e56ce82440cc9cd11bba8c4000f9722e4a59c6ca3&.svg')
		.addFields(
		{ name: 'Instrução', value:'Clique no canal para iniciar a compra', inline: false },
		{ name: '\u200B', value: '\u200B' },	
        { name: 'Seguidores Para o Instagram', value: 'Adicione a quantidade que preferir de seguidores', inline: false },
        { name: 'Preço: R$10,00', value: 'https://discord.com/channels/1170491792613965914/1171208999224479814', },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Seguidores Para o TikTok', value: 'Adicione a quantidade que preferir de seguidores', inline: false },
		{ name: 'Preço: R$10,00', value: 'https://discord.com/channels/1170491792613965914/1171209049518387281'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inscritos Para o Youtube', value: 'Adicione a quantidade que preferir de inscritos', inline: false },
		{ name: 'Preço: R$10,00', value: 'https://discord.com/channels/1170491792613965914/1171209130397151372' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Nitro mensal', value:'Nitro de um Mês', inline: false },
		{ name: 'Preço: R$10,00', value: 'https://discord.com/channels/1170491792613965914/1171208777706516590'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Nitro Trimensal', value:'Nitro de Três meses', inline: false },
		{ name: 'Preço: R$10,00', value: 'https://discord.com/channels/1170491792613965914/1171208777706516590'},
		{ name: '\u200B', value: '\u200B' }
    )
	.setImage('https://cdn.discordapp.com/attachments/1170829861779152897/1171518036277215303/nitros-img-melhorada.jpg?ex=655cf831&is=654a8331&hm=235906078b24a8cfe1f26b3e56ce82440cc9cd11bba8c4000f9722e4a59c6ca3&.png')
	.setTimestamp()
	.setFooter({ text: 'Direitos reservados a © Nitros Store', iconURL: 'https://cdn.discordapp.com/attachments/1170829861779152897/1171520256041291797/emoji_nitros_dois-removebg-preview.png?ex=655cfa42&is=654a8542&hm=da3c1032782999e01bf13034bffbe801294c8003dcc1a5d2621238cf5ec3d87c&.png' });
		await interaction.reply({ embeds: [exampleEmbed] })
	}

}




