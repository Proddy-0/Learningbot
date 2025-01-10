import { createCommand } from "#base";
import { res } from "#functions";
import { createEmbed } from "@magicyan/discord";
import { ApplicationCommandOptionType, ApplicationCommandType, }
from "discord.js";


createCommand({
    name: "soma",
    description: "este comando realiza uma soma entre dois valores",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "num1",
            description: "primeiro valor a ser somado",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "num2",
            description: "primeiro valor a ser somado",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    async run(interaction) {
        const { options } = interaction
        const value1 = options.getString("num1")
        const value2 = options.getString("num2")
        const value3 = Number(value1) + Number(value2)
        const embed = createEmbed({
            title: "Soma resulta em: " + value3
        }
        )
        if (!value3) {
            return interaction.reply(res.warning("Precisa ser um numero"))
        }
        interaction.reply({embeds: [ embed ]})

    }
}
)