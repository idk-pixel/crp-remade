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

/* 
MIT License

Copyright (c) 2022 WhoAboutYT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/