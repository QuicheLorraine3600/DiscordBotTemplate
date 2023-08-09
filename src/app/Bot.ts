import { Client, Events } from "discord.js";

import intents from "./utils/DiscordIntents"
import CommandHandler from "./CommandHandler"
import logger from "./modules/Logger";

// import logger from "./utils/Logger"

export default class Bot {

	public readonly client: Client
    public readonly commandHandler: CommandHandler

	constructor() {

		const client = new Client({ intents: intents });
		this.client = client
		
		client.once(Events.ClientReady, c => {
			logger.info(`Ready! Logged in as ${c.user.tag}`);
		});
		
		this.commandHandler = new CommandHandler(this)
	}

	public login(token: string) {
		this.client.login(token)
	}

	public disconnect() {
		this.client.destroy()
	}
}