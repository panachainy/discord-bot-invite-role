import DiscordJS, { Intents } from "discord.js";
import "dotenv/config";
import { dmMessage } from "./services/dm";

const BOT_TOKEN = process.env.BOT_TOKEN;

function Init() {
  const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.DIRECT_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
    ],
  });

  client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
  });

  client.on("guildMemberAdd", async (guildMember) => {
    if (guildMember.user.bot) return;

    console.log("guildMemberAdd ===================");

    console.log("===1", guildMember.user.username);
    console.log("===1", guildMember.user.id);

    guildMember.createDM().then((channel) => {
      const grettingMessage = `สวัสดีคุณ ${guildMember.user.username}\
      รบกวนป้อนเบอร์โทรศัพท์\
      เพื่อทำการลงทะเบียน xxxxxxxxxxx\
      [ตัวอย่าง] 0901111111`;

      channel.send(grettingMessage);
    });

    return;
  });

  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.channel.type === "DM") {
      dmMessage(message);
      return;
    }

    message.reply("just test bot");
  });

  client.login(BOT_TOKEN);
}

Init();
