const { ChatInputCommandInteraction, Interaction, EmbedBuilder, messageLink } = require('discord.js');
const { embeds } = require('../utils/modules/setup-module');

let allowed_custom_ids = ['setup-shifts']

module.exports = {
    name: 'interactionCreate',
    /**
     * 
     * @param {Interaction} interaction
     */
    run: async (interaction) => {
        if (!interaction.isButton()) return;
        let crnt_1dfwevarb = false
        allowed_custom_ids.forEach((customId) => {
            if (customId == interaction.customId) crnt_1dfwevarb = true
        }); if (crnt_1dfwevarb !== true) return // Returning because this isnt the correct handler

        // Check to make sure the user isnt tryign to cheat the system.
        if (interaction.user.id !== interaction.guild.ownerId) {
            return interaction.reply({
                embeds: [embeds.ownerPermissionErr],
                ephemeral: true
            })
        }

        // Code if all checks go well.
        const embed_temp = new EmbedBuilder().setTitle('CRP Remade | Shifts').setColor('DarkOrange').setTimestamp().setFooter({ text: 'CRP Remade' })
        switch (interaction.customId) {
            case "setup-shifts":
                interaction.channel.send({ embeds: [embed_temp.setDescription()] })
        }
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