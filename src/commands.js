const commands = [
  "!me",
  "!git",
  "!yukka",
  "!agua",
  "!cafe",
  "!sociais",
  "!lesado",
  "!portfolio",
  "!playlist",
  "!sugestao",
  "!add",
  "!editor",
  "!vscode",
  "!mod",
  "!extensoes",
  "!comandos",
];

let lesado = 0;
let f = 0;

function handleCommand(command, subject) {
  const defaultMsg = `Não entendi o que você quis dizer, digite !comandos. VoHiYo .`;

  if (!commands.includes(command)) {
    return defaultMsg;
  }

  if (command) {
    switch (command) {
      case "!agua":
        return `Respira e toma água NotLikeThis`;
      case "!mod":
        return `Já deu amor aos mods hoje ? <3`;
      case "!editor":
        return `VSCode <3 ou Sublime(para quem ta começando) :p`;
      case "!extensoes":
        return `Bracket Pair Colorizer 💅, Cobalt Next 🎨, EditorConfig 🧾, Live Server 🖥, Prettier 🤝, Color Highlight 🎨. `;
      case "!vscode":
        return `Minhas configurações do VSCODE: http://dontpad.com/yunovscodeconfigdontchange 👌`;
      case "!yukka":
        f++;
        return `O yuno matou a Yukka ${f} ${f > 1 ? "vezes" : "vez"} hoje. D:`;
      case "!lesado":
        if (subject) {
          lesado++;
          subject.shift();

          return `O yuno foi lesado mais de  ${lesado} ${
            lesado > 1 ? "vezes" : "vez"
          }   NotLikeThis `;
        } else return;
      case "!me":
        return `HeyGuys Aoba, eu sou o yuno ou álex, programador de programas e tocador de tocagens.`;
      case "!playlist":
        return `🎶 https://open.spotify.com/playlist/7Kag7syJeod1N7pRyDp2bh?si=a9ffb9eb3c504cf4 🎶`;
      case "!sociais":
        return `👨‍💻 LinkedIn: https://www.linkedin.com/in/alex-rodrigues-83558718b/`;
      case "!sugestao":
        return `Para sugerir algo para a Yukka AYAYA didite !add <sugestão>.`;
      case "!add":
        if (subject) {
          args.shift();

          return `/me ${args.join(" ")} foi sugerido por: ${context.username}.`;
        } else return defaultMsg;
      case "!cafe":
        return `Vamo tomar um café ? 3 minutinhos ☕.`;
      case "!portfolio":
        return `👾 Dá uma olhada aqui, tem muita coisa legal, https://hiimlex.github.io/portfolio 👾`;

      case "!git":
        return `TehePelo é o programas ? https://github.com/hiimlex .`;
      case "!comandos":
        const command_list = commands.map((el) => {
          if (commands.indexOf(el) === 0) {
            return el;
          }
          return " " + el;
        });
        return `${command_list} VoHiYo`;
      default:
        return defaultMsg;
    }
  }
}

module.exports = handleCommand;
