// Todo: turns into object and refers the key and value on handleCommand call
const COMMANDS = [
	"water",
	"coffee",
	"mod",
	"editor",
	"code",
	"bot",
	"me",
	"socials",
	"git",
	"commands",
	"lesado",
	"portfolio",
	"spotify",
];

let lesado = 0;
let f = 0;
const defaultMsg = `Não entendi o que você quis dizer, digite !comandos. VoHiYo .`;

function handleCommand(com) {
	const command = com.split("!")[1];

	if (command) {
		if (!COMMANDS.includes(command)) {
			return defaultMsg;
		}

		const commandObj = {
			water: () => "Respira e toma água NotLikeThis",
			coffee: () => "Vai um café ? HeyGuys",
			mod: () => "Já deu amor aos mods hoje ? <3",
			editor: () => "VSCode",
			code: () =>
				"Atom One Dark Theme, Dracula, Color Highlight, Code Spell Checker, EditorConfig, Error Lens, EsLint, GitHub Copilot, gitignore, GitLens, Lorem Ipsum, Material Icon Theme, One Dark Pro, Path Intellisense, Prettier, Rainbow Brackets, vscode-pets, vscode-styled-components",
			bot: () => {
				f++;
				return `O bot já foi chamado ${f} vezes. VoHiYo`;
			},
			me: () => "Dev Front-End e Designer UI/UX",
			socials: () => "https://linktr.ee/yuninho",
			git: () => "https://github.com/hiimlex",
			commands: () => `${COMMANDS.map((c) => `!${c}`).join(", ")}`,
			lesado: () => {
				lesado++;
				return `O yuno já foi lesado ${lesado} vezes. VoHiYo`;
			},
			portfolio: () => "http://alexalves.me/website",
			spotify: () =>
				"https://open.spotify.com/user/22isvg752e4j3bgwpfe32sm6i?si=231b52f9d2f74f49",
		};

		if (commandObj[command]) {
			return commandObj[command]();
		}
	}
}

module.exports = { handleCommand };
