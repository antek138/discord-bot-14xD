const { RichEmbed } = require("discord.js")

module.exports = {
  name: "info",
  description: "Display bot info.",
  aliases: ["botinfo"],

  run(msg, args) {
    const { channel } = msg

    const botAuthor = "Антони"
    const botVersion = "v1.2"
    const botName = "GutenBoten"
    const botDescription =
      "Fajny Bot, który ci we wszystkim pomoże. :)"

    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle(botName)
      // Set the color of the embed
      .setColor(0x46D820)
      // Set the main content of the embed
      .setDescription(botDescription)
      .addField("Autor", botAuthor, true)
      .addField("Wersja", botVersion, true)

    channel.send(embed)
  },
}
