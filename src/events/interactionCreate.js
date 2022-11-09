const { ChatInputCommandInteraction, Interaction } = require('discord.js');
module.exports = {
    name: 'interactionCreate',
    /**
     * 
     * @param {Interaction} intercation 
     */
    run: async (intercation) => {
        let client = intercation.client
        if (!intercation.isChatInputCommand()) return;
        
        const command = client.commands.get(intercation.commandName);
        if (!command) return intercation.reply( { content: 'This command is outdated.', ephemeral: true } );
        command.execute(intercation, client)
    }
}