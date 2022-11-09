const { Client, Collection } = require('discord.js');

module.exports = class CRP_Remade extends Client {
    constructor() {
        super({ intents: [
            'Guilds', 'GuildMessages', 'MessageContent'
        ] })

        this.fs = require('fs');
        this.path = require('path');
        this.commands = new Collection();
        this.init()
    }

    async commandHandler() {
        const ascii = require('ascii-table');
        const table = new ascii().setHeading('Command', 'Status');

        await this.commands.clear();
        let commandArray = [];

        let Files = this.fs.readdirSync(this.path.join(__dirname, '../commands'))
            .filter(file => file.endsWith('.js'));
        Files.forEach(file => {
            const cmd = require('../commands/'+file);
            this.commands.set( cmd.data.name, cmd );
            commandArray.push(cmd.data.toJSON());
            table.addRow(cmd.data.name, "🟩"); // Can edit to emoji of choice.
        });
        console.log(this.commands);
        this.application.commands.set(commandArray);
        return console.log(table.toString());
    }

    async eventHandler() {
        let events = this.fs.readdirSync(this.path.join(__dirname, '../events'))
            .filter(f => f.endsWith('.js'));
        
        for (let file of events) {
            const event = require('../events/'+file);
            
            this.on(event.name, (...args) => event.run(...args))
        }
    }
    async init() {

        /* Variables */

        const config = require('../../config.json');

        /* Initiator */

        this.eventHandler()
        this.login(config.token);

    }
}