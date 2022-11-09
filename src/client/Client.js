const { Client } = require('discord.js');

module.exports = class CRP_Remade extends Client {
    constructor() {
        super({ intents: [
            'Guilds', 'GuildMessages', 'MessageContent'
        ] })

        this.init()
    }

    async init() {}
}