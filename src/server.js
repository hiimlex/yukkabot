const tmi = require("tmi.js");
require("dotenv").config();

const { handleCommand } = require("./commands");

const opts = {
	options: {
		debug: true,
	},
	identity: {
		username: process.env.BOT_USERNAME,
		password: process.env.OAUTH_TOKEN,
	},
	channels: [process.env.CHANNEL_NAME],
	port: process.env.PORT || 80,
};

function onMessageHandler(target, context, msg, self) {
	if (self || !msg.startsWith("!")) {
		return;
	}

	const commandName = msg.split(" ")[0];

	const message = handleCommand(commandName);

	client.say(target, message);
}

function onConnectedHandler(target, addr, port) {
	console.log(`* Connected to ${addr}:${port}`);
}

const client = new tmi.client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect();
