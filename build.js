
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

const terminalImage = require('terminal-image');



// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  float: "center",
  borderStyle: "classic"
};

// Text + chalk definitions
const data = {
  name: chalk.hex('#FFD700')("Cédric Kévers /"),
  handle: chalk.hex('#f9429e')("Miakis"),
  work: chalk.hex('#f9429e')("Becode Junior"),
  twitter: chalk.hex('#f9429e')("https://twitter.com/Mi4kis"),
  github: chalk.hex('#f9429e')("https://github.com/cedrickevers"),

  npx: chalk.hex('#f9429e')(" npx miakis"),

  labelWork: chalk.hex('#FFD700')("      Work:"),
  labelTwitter: chalk.hex('#FFD700')("   Twitter:"),
  labelGitHub: chalk.hex('#FFD700')("    GitHub:"),
  labelLinkedIn: chalk.hex('#FFD700')("  LinkedIn:"),
  labelWeb: chalk.hex('#FFD700')("       Web:"),
  labelCard: chalk.hex('#FFD700')("      Card:")
};

// Actual strings we're going to output
var newline = "\n";
var heading = `${data.name} ${data.handle}`;
var working = `${data.labelWork}  ${data.work}`;
var twittering = `${data.labelTwitter}  ${data.twitter}`;
var githubing = `${data.labelGitHub}  ${data.github}`;
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
var carding = `${data.labelCard}  ${data.npx}`;
var web = chalk.cyan("ミャキシェフのnpxエクササイズ");
var image = (async () => {
  console.log(await terminalImage.file('ck.jpg'));
})();


// Put all our output together into a single variable so we can use boxen effectively
const output =
  image +
  web +
  newline +
  newline +
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  newline +

  carding;


console.log(chalk.green(boxen(output, options)))
