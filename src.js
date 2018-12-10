#!/usr/bin/env node

const program = require("commander");

const { newCommand, newQuestions } = require("./lib/commands/new");
const { initCommand } = require("./lib/commands/init");

// fs.readFile("./.srcrc", "utf8", (err, data) => {
//   if (err) console.error("no .srcrc file found");
//   console.log(JSON.parse(data));
// });

const initQuestions = [
  {
    type: "input",
    name: "path",
    message: "Enter the parent folder to add to",
    default: "src/components"
  },
  {
    type: "input",
    name: "folderName",
    message: "Enter Folder Name ..."
  },
  {
    type: "input",
    name: "component",
    message: "Enter Component Name ..."
  },
  {
    type: "list",
    name: "styles",
    message: "Enter Styles Type ...",
    default: "emotion10",
    choices: ["emotion10", "emotion", "css", "cssModules"]
  }
];

program.version("0.0.1").description("Create React Components from the CLI");

program
  .command("new")
  .alias("n")
  .description("Create a new component")
  .action(newCommand);

program
  .command("init")
  .alias("i")
  .option("-f, --force", "Force Initializing", undefined, false)
  .description("Initialize SRC")
  .action(initCommand);

program.parse(process.argv);
