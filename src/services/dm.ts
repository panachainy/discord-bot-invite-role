import DiscordJS from "discord.js";

function dmMessage(message: DiscordJS.Message<boolean>) {
  console.log("this is DM ===========");
  message.reply("pong");
}

export { dmMessage };
