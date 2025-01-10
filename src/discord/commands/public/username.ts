import { createCommand } from "#base";
import { createEmbed } from "@magicyan/discord";
import { ApplicationCommandType } from "discord.js";



createCommand({
    name: "nome",
    description: "coleta o nome do usuario",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        const embed = createEmbed({
            title: "O nome do usuario é: " + `${interaction.user.displayName}`,
        })
        await interaction.reply({embeds: [embed]});
    }
});
