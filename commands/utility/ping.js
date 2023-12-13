const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		if (interaction.user.id === '423649661254107137') {
			await interaction.reply('Pong!');
		} else {
			await interaction.reply('No Pong For YOU!');
		}
	},
};