import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import Bot from "../Bot";

export type Interaction = ChatInputCommandInteraction<CacheType>

export class Command {

	get data(): SlashCommandBuilder {
		return new SlashCommandBuilder()
	}

	async execute(bot: Bot, interaction: Interaction) {

	}
}