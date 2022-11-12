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