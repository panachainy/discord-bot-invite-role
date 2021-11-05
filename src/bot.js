const { Client, Intents, MessageEmbed } = require("discord.js");

require("dotenv").config();
const BOT_TOKEN = process.env.BOT_TOKEN;

// const util = require("util");

function dmProcess(message) {
  console.log("this is DM ===========", Message);
  message.reply("pong");
}

function Init() {
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.DIRECT_MESSAGES,
    ],
  });

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on("disconnect", function (msg, code) {
    if (code === 0) return console.error(msg);
    bot.connect();
  });

  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.channel.type === "DM") {
      dmProcess(message);
      return;
    }

    // message.author.createDM().then((dm) => {
    //   dm.send(`สวัสดีคุณ ${message.author.username}
    //   รบกวนป้อนเบอร์โทรศัพท์ เพื่อทำการลงทะเบียน Moomall`);
    //   console.log("dm done");
    // });

    if (message.content === "ping") {
      console.log("ping");
      message.reply("pong");
    }

    const dmLogEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.tag} dmed the bot and said: `)
      .setDescription(message.content)
      .setFooter(`User's id: ${message.author.id}`);
    // dmLogEmbed.setImage(
    //   "https://stg-salepage.moomall.com/api/moomall/images/logo.png"
    // );

    message.reply(dmLogEmbed);
  });

  client.login(BOT_TOKEN);
}

Init();
