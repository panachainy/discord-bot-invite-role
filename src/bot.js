const { Client, Intents } = require("discord.js");

function init(BOT_TOKEN) {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

    //   const util = require("util");

    //   console.log(
    //     util.inspect(client, {
    //       showHidden: false,
    //       depth: null,
    //       colors: true,
    //     })
    //   );
  });

  client.on("message", async (message) => {
    console.log(`1sssssssssssssssssss ${message}`);
  });

  client.on("messageCreate", async (message) => {
    console.log(`2sssssssssssssssssss ${message}`);
  });

  client.on("interactionCreate", async (interaction) => {
    console.log("123123");

    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping") {
      await interaction.reply("Pong!");
    }
  });

  client.on("messageReaction", (messageReaction, user) => {
    console.log(
      `========== messageReaction: ${messageReaction} / user: ${user}`
    );
  });

  client.login(BOT_TOKEN);
}

exports.init = init;
