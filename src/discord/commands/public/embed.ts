import { createCommand } from "#base";
import { createEmbed } from "@magicyan/discord";
import { ApplicationCommandType } from "discord.js";


createCommand({
    name: "embed",
    description: "Primeiro enbed feito",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        const embed = createEmbed({
            title: "Primeiro enbed feito",
            description: "EU sou foda pqp respeita o pai krl",
        })
        await interaction.reply({embeds: [embed]});
    }
});