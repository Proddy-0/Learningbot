import { createCommand } from "#base";
import { createEmbed } from "@magicyan/discord";
import { ApplicationCommandType } from "discord.js";


createCommand({
    name: "idguild",
    description: "coleta o id da Guild",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        const embed = createEmbed({
            title: "O id da Guild é: " + `${interaction.commandGuildId}`,
        })
        await interaction.reply({embeds: [embed]});
    }
});