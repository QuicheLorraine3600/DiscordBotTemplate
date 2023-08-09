import { REST, Routes } from "discord.js"

import { token, clientId, guildId } from "./Env"

import CommandList from "./app/commands/Commands"

const commandList = CommandList;

const commands = commandList.map(command => command.data.toJSON()).toArray()

console.log(commands)

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data: any = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();