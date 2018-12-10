const fs = require("fs");
const { prompt } = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");

const appConf = require("../get-config");

const choices = require("../choices");
const indexFile = require("../templates/indexFile");
const stylesFile = require("../templates/stylesFile");
const queryFile = require("../templates/queryFile");

const newQuestions = [
  {
    type: "input",
    name: "parent",
    message: "Enter the parent folder to add to",
    default: "components"
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
  !appConf.stylesType && {
    type: "list",
    name: "styles",
    message: "Select Styles Type ...",
    default: "emotion10",
    choices
  },
  {
    type: "list",
    name: "componentType",
    message: "Select Component Type ...",
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
  appConf.graphql && {
    type: "confirm",
    name: "createGraphql",
    message: "Create a query file?"
  }
].filter(Boolean);

const getStylesFileEndings = styleType => {
  if (styleType === "emotion" || styleType === "emotion10") return "js";
  if (styleType === "css" || styleType === "cssModules") return "css";
  if (styleType === "scss" || styleType === "scssModules") return "scss";
};

const newCommand = () => {
  console.log(chalk.blue(figlet.textSync("New React Component", { horizontalLayout: "default" })));

  prompt(newQuestions).then(({ parent, folderName, component, styles = appConf.stylesType, createGraphql = false }) => {
    const filePath = `${appConf.srcPath}/${parent}/${folderName}`;
    const split = filePath.split("/");
    let concat = "";

    split.forEach((directory, index) => {
      const directoryPath = index === 0 ? directory : `${concat}${directory}`;

      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
      }

      concat = `${concat}${directory}/`;
    });

    fs.writeFile(`${concat}index.js`, indexFile(component, styles), err => {
      if (err) throw err;
      console.log(chalk.green(`✅ The index file has been saved to ${concat}index.js!`));
    });

    fs.writeFile(`${concat}styles.${getStylesFileEndings(styles)}`, stylesFile(styles, component), err => {
      if (err) throw err;
      console.log(chalk.green(`✅ The styles file has been saved to ${concat}styles.${getStylesFileEndings(styles)}!`));
    });

    if (createGraphql) {
      fs.writeFile(`${concat}query.js`, queryFile(), err => {
        if (err) throw err;
        console.log(chalk.green(`✅ The query file has been saved to ${concat}query.js!`));
      });
    }
  });
};

module.exports = { newCommand, newQuestions };
