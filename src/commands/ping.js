const { ChatInputCommandInteraction, SlashCommandBuilder, Interaction, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Respond's with the bot ping.")
    ,
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction  
     */
    execute: async (interaction, client) => {
        try {
            const m2 = await interaction.reply({ content: 'Working...', fetchReply: true });

            await interaction.editReply({
                content: 'Loading progress: 100% (100%/100%) [Done]',
                embeds: [
                    new EmbedBuilder()
                        .setTitle('Pong!')
                        .addFields([{ name: 'Bot Latency', value: `${m2.createdTimestamp - interaction.createdTimestamp}ms` }
                            , {
                            name: 'Bot Latency',
                            value: `${interaction.client.ws.ping}ms`
                        }])
                        .setColor('Random')
                ]
            });
        } catch (e) { console.error(e) };
    }
}

