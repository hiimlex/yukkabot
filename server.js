const tmi = require("tmi.js");
require("dotenv").config();

const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: [process.env.CHANNEL_NAME],
};

const client = new tmi.client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect();

const commands = [
  "!me",
  "!git",
  "!portfolio",
  "!playlist",
  "!sugestao",
  "!socials",
  "!add",
  "!comandos",
];

function onMessageHandler(target, context, msg, self) {
  if (self || !msg.startsWith("!")) {
    return;
  }

  const commandName = msg.split(" ")[0];
  const args = msg.slice(1).split(" ");

  switch (commandName) {
    case "!me":
      client.say(
        target,
        `HeyGuys Aoba, eu sou o yuno ou álex, programador de programas e tocador de tocagens.`
      );
      return;
    case "!playlist":
      client.say(
        target,
        `🎶 https://open.spotify.com/playlist/7Kag7syJeod1N7pRyDp2bh?si=a9ffb9eb3c504cf4 🎶`
      );
      return;
    case "!socials":
      client.say(
        target,
        `LinkedIn: https://www.linkedin.com/in/alex-rodrigues-83558718b/ Email: alex.adaumi@gmail.com`
      );
      return;
    case "!sugestao":
      client.say(
        target,
        `Para sugerir algo para a Yukka AYAYA didite !add <sugestão>.`
      );
      return;
    case "!add":
      args.shift();

      client.say(
        target,
        `/me ${args.join(" ")} foi sugerido por: ${context.username}.`
      );
      return;
    case "!portfolio":
      client.say(
        target,
        `👾 Dá uma olhada aqui, tem muita coisa legal, https://hiimlex.github.io/portfolio 👾`
      );
      return;
    case "!git":
      client.say(
        target,
        `TehePelo é o programas ? https://github.com/hiimlex .`
      );
      return;
    case "!comandos":
      const command_list = commands.map((el) => {
        if (commands.indexOf(el) === 0) {
          return el;
        }
        return " " + el;
      });
      client.say(target, `${command_list} VoHiYo`);
      return;
    default:
      client.say(
        target,
        "Não entendi o que você quis dizer, digite !comandos. VoHiYo ."
      );
      return;
  }
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
