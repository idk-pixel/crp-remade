const { ActionRowBuilder } = require("@discordjs/builders");
const { EmbedBuilder, ButtonBuilder, DiscordAPIError, ButtonStyle, Embed } = require("discord.js");

let hyper = '[Github](https://github.com/idk-pixel/crp-remade)'

module.exports.code_util = {
    buttons: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('setup-shifts')
                .setDisabled(false)
                .setEmoji('🛠️')
                .setLabel('Shifts [Clockin/Clockout]')
                .setStyle(ButtonStyle.Primary)
        )
}

module.exports.embeds = {
    ownerPermissionErr: 
    new EmbedBuilder()
    .setTitle('CRP Remade | Permission Error')
    .setColor('Red')
    .setDescription('ERROR: You are not the guild owner. You may not run this command.')
    .setTimestamp()
    .setFooter({ text: 'CRP Remade | Permission Error' })
    ,

    welcome: 
    new EmbedBuilder()
        .setTitle('CRP Remade | Setup')
        .setColor('DarkOrange')
        .setDescription('Welcome to CRP Remade | Setup.\nPlease press a button below to select which module you would like to setup.')
        .setFooter({ text: 'CRP Remade | Setup' })
}


