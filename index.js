require("dotenv").config();

const Discord = require("discord.js")

const token = process.env.TOKEN

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready",  () => { // Once is ready, the function below will run
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi") {
        message.reply("Hello world")
    }
})

client.on("messageCreate", (message) => {
    if(message.content == "hola") {
        message.reply("kyt")
    }
})

client.login(token)