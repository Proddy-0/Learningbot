import { createCommand } from "#base";
import { createEmbed } from "@magicyan/discord";
import { ApplicationCommandType } from "discord.js";


createCommand({
    name: "myname",
    description: "Este é o meu nome",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        const embed = createEmbed({
            title: "Meu nome é :" + interaction.client.user.username,
        })
        console.log(interaction.client.application.commands)
        await interaction.reply({embeds: [embed]});
    }
});