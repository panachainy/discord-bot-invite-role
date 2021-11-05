const { Client, Intents, MessageEmbed } = require("discord.js");

require("dotenv").config();
const BOT_TOKEN = process.env.BOT_TOKEN;

const util = require("util");

function logDeep(message, obj) {
  console.log(message);
  util.inspect(obj, false, null, true);
}

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

  client.on("guildMemberAdd", async () => {
    const channel = client.channels.cache.get("906054813798780958");
    const member = channel.guild.member(client.user);

    console.log("test", channel, member);

    if (!member.hasPermission("MANAGE_MESSAGES")) return;
    channel.send(`Welcome to the server ${member}!`);
  });

  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.channel.type === "DM") {
      dmProcess(message);
      return;
    }

    message.author.createDM().then((dm) => {
      dm.send(`สวัสดีคุณ ${message.author.username}\
      รบกวนป้อนเบอร์โทรศัพท\
      เพื่อทำการลงทะเบียน Moomall\
      [ตัวอย่าง] 0901111111`);

      console.log("dm done");
    });

    if (message.content === "ping") {
      console.log("ping");
      message.reply("pong");
    }

    message.reply(
      `สวัสดีคุณ ${message.author.username}\n` +
        "รบกวนป้อนเบอร์โทรศัพท์\n" +
        "เพื่อทำการลงทะเบียน Moomall\n" +
        "[ตัวอย่าง] 0901111111"
    );
  });

  client.login(BOT_TOKEN);
}

Init();
