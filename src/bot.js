const { Client, Intents } = require("discord.js");

require("dotenv").config();
const BOT_TOKEN = process.env.BOT_TOKEN;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("disconnect", function (msg, code) {
  if (code === 0) return console.error(msg);
  bot.connect();
});

client.on("messageCreate", async (msg) => {
  if (msg.content === "ping") {
    console.log("ping");
    msg.reply("pong");
  }
});

client.login(BOT_TOKEN);
