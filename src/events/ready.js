const Discord = require('discord.js')

module.exports = {
    name: 'ready',
    run: async (client) => {
        console.log('Bot online!')
        client.user.setPresence({
            status: 'online',
            activities: [{ name: 'CRP being re-made.', type: Discord.ActivityType.Watching }]
        })

        client.commandHandler()
    }
}