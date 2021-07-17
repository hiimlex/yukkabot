const tmi = require("tmi.js");
require("dotenv").config();

const commands = require("./commands");

const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: [process.env.CHANNEL_NAME],
};

function onMessageHandler(target, context, msg, self) {
  if (self || !msg.startsWith("!")) {
    return;
  }

  const commandName = msg.split(" ")[0];
  const args = msg.slice(1).split(" ");

  if (commandName === "cafe") {
    setTimeout(() => {
      client.say(target, `Voltamo 😎`);
    }, 3000);
  }

  const message = commands(commandName, args);

  client.say(target, message);
}

function onConnectedHandler(target, addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

const client = new tmi.client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect();
