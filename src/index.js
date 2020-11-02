const { Client } = require("discord.js")
const chalk = require("chalk")

const { token } = require("./config/config.js")

const client = new Client()

const commandHandler = require("./handlers/command.handler")

const log = console.log

// Initialize Comamnd Manager
commandHandler(client)

const channelId = "772816588000460821"

client.on("ready", () => {
  log(chalk.green(`Zalogowano jako ${client.user.tag}!`))

  const guild = client.guilds.get("697915733564194936")

  setInterval(() => {
    const time = new Date().toLocaleTimeString()
    const channelName = `🕥 ${time}`

    guild.channels.get(channelId).setName(channelName)
  }, 3000)
})

// Connect with Discord
client.login(token)

// Error handler - omit crashed
client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})
