const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('survivalroles')
        .setDescription('Lista de roles Survivals'),
    async execute(interaction, client) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('minecraft')
					.setLabel('MINECRAFT')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('sevendays')
					.setLabel('7DAYS TO DIE')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('theforest')
					.setLabel('THE FOREST')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('projectzomboid')
					.setLabel('PROJECT ZOMBOID')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('terraria')
					.setLabel('TERRARIA')
					.setStyle(ButtonStyle.Secondary),
			);
        const embed = new EmbedBuilder()
			.setColor(0x33FF66)
			.setTitle('πππππ ππ πππππ')
			.setDescription('πππ§πππ’π₯ππ: πππππππΌππ & ππΌππΏπ½ππ');

            await interaction.reply({
                embeds: [embed],
				components: [row]
            });
            
        
    },
};