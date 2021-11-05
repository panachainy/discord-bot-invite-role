const { Client, Intents } = require("discord.js");

function init(BOT_TOKEN) {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on("message", async (message) => {
    console.log(`1sssssssssssssssssss ${message}`);
  });

  client.on("messageCreate", async (msg) => {
    if (msg.content === "ping") {
      console.log("ping");
      msg.reply("pong");
    }
  });

  client.login(BOT_TOKEN);
}

exports.init = init;
