const fs = require("fs");
const { prompt } = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");

const appConf = require("../get-config");
const styleChoices = require("../choices");

const initQuestions = [
  {
    type: "input",
    name: "srcPath",
    message: "Enter the application folder ...",
    default: appConf.srcPath || "src",
    validate: srcPath => {
      if (srcPath) return true;
      return "Please provide the path to your application folder.";
    }
  },
  {
    type: "list",
    name: "stylesType",
    message: "Enter Styles Type ...",
    default: appConf.stylesType || "",
    choices: styleChoices
  },
  {
    type: "list",
    name: "componentType",
    message: "Enter prefered Component Type ...",
    default: appConf.componentType || "functional",
    choices: [
      {
        name: "Functional Component",
        value: "functional"
      },
      {
        name: "Class Component",
        value: "class"
      }
    ]
  },
  {
    type: "confirm",
    name: "graphql",
    message: "Are you using graphQl in the project?",
    default: !!appConf.graphql
  }
];

const initCommand = ({ force }) => {
  if (appConf.config && !force) {
    console.log(chalk.red(`A config file already exists here: ${appConf.config}`));
    console.log(chalk.red("Use the force flag if you want to generate a new configuration."));
  } else {
    console.log(chalk.blue(figlet.textSync("Initialize", { horizontalLayout: "default" })));
    console.log(chalk.green("Welcome to Start React Component, 👋 "));
    console.log(chalk.green("an opinionated CLI for creating component files from the command line."));
    console.log(chalk.green("It tries to adhere to the Community Best Practices, but it is customizable."));
    console.log(chalk.green("We will ask you some questions, about your project to make working with SRC faster and easier! 🚀"));
    console.log(chalk.yellow("This will generate a .srcrc file in your project root."));
    console.log("");

    prompt(initQuestions).then(answers => {
      const { srcPath, stylesType, componentType, graphql } = {
        ...appConf,
        ...answers
      };
      const options = {
        srcPath,
        stylesType,
        componentType,
        graphql
      };

      fs.writeFileSync(".srcrc", JSON.stringify(options, null, 2), err => {
        if (err) throw err;
        console.log(chalk.green("✅ The config file has been saved to .srcrc!"));
      });
    });
  }
};

module.exports = { initCommand, initQuestions };
