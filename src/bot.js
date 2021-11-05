const { Client, Intents, MessageEmbed } = require("discord.js");

require("dotenv").config();
const BOT_TOKEN = process.env.BOT_TOKEN;

const util = require("util");

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
      Intents.FLAGS.GUILD_MEMBERS,
    ],
  });

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on("disconnect", function (msg, code) {
    if (code === 0) return console.error(msg);
    bot.connect();
  });

  client.on("guildMemberAdd", async (guildMember) => {
    if (guildMember.user.bot) return;

    console.log("guildMemberAdd ===================");

    console.log("===1", guildMember.user.username);
    console.log("===1", guildMember.user.id);

    guildMember.createDM().then((channel) => {
      const grettingMessage = `สวัสดีคุณ ${message.author.username}\
      รบกวนป้อนเบอร์โทรศัพท์\
      เพื่อทำการลงทะเบียน Moomall\
      [ตัวอย่าง] 0901111111`;

      channel.send(grettingMessage);
    });

    return;
  });

  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.channel.type === "DM") {
      dmProcess(message);
      return;
    }

    //   message.author.createDM().then((dm) => {
    //     dm.send(`สวัสดีคุณ ${message.author.username}\
    //     รบกวนป้อนเบอร์โทรศัพท\
    //     เพื่อทำการลงทะเบียน Moomall\
    //     [ตัวอย่าง] 0901111111`);

    //     console.log("dm done");
    //   });

    //   if (message.content === "ping") {
    //     console.log("ping");
    //     message.reply("pong");
    //   }

    //   message.reply(
    //     `สวัสดีคุณ ${message.author.username}\n` +
    //       "รบกวนป้อนเบอร์โทรศัพท์\n" +
    //       "เพื่อทำการลงทะเบียน Moomall\n" +
    //       "[ตัวอย่าง] 0901111111"
    //   );
  });

  client.login(BOT_TOKEN);
}

Init();
