import { Client, Collection, Intents } from 'discord.js';

import { CommandRegistry, EventRegistry } from '../struct/registries/export/RegistryIndex';
import { CommandOptions, EventOptions } from '../types/Options';
import { prefix, token } from '../config';


class bot extends Client {
    public prefix: string;
    public commands = new Collection<string, CommandOptions>();

    public cooldowns = new Collection<string, Collection<string, number>>();

    public events = new Collection<string, EventOptions>();

    public constructor() {
        super({
            intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
        });

        this.prefix = prefix;
    }

    public start() {
        CommandRegistry(this);
        EventRegistry(this);
        super.login(token);
    }
}

export default bot;