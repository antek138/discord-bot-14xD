module.exports = {
  name: "clock",
  description: "Komenda Zegar.",
  args: true,
  guildOnly: true,
  usage: "<action>[add]",

  async run(msg, args) {
    const { channel, guild } = msg

    // const time = new Date().toLocaleTimeString().slice(0, 5)
    const time = new Date().toLocaleTimeString()
    const channelName = `🕥 ${time}`

    const createdChannel = await guild.createChannel(channelName, {
      type: "voice",
    })

    if (createdChannel) {
      const channelId = createdChannel.id

      // Save channel id to config
    }
  },
}
