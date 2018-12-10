<div style="font-size: 35px;font-weight: bold;text-align: center;">Create React Component</div>
<div style="font-size: 20px;text-align: center;">A blazing-fast CLI to create React components 🔥</div>

<div style="font-size: 25px;font-weight: bold;text-align: center;margin: 32px 0;">Installing</div>

To install run this with `npm`:

```
npm install --global start-react-components
```

or this with `yarn`:

```
yarn add global start-react-component
```

<div style="font-size: 25px;font-weight: bold;text-align: center;margin: 32px 0;">Usage</div>

To use this CLI you have two possible syntaxes:

```
start-react-component [cmd]

src [cmd]
```

<div style="font-size: 25px;font-weight: bold;text-align: center;margin: 32px 0;">Commands</div>

### Initialize

To initialize the configurations, run the following and answer the question, to generate your configuration file `.srcrc`

```
$ start-react-component init

  ___       _ _   _       _ _
 |_ _|_ __ (_) |_(_) __ _| (_)_______
  | || '_ \| | __| |/ _` | | |_  / _ \
  | || | | | | |_| | (_| | | |/ /  __/
 |___|_| |_|_|\__|_|\__,_|_|_/___\___|

Welcome to Start React Component, 👋
an opinionated CLI for creating component files from the command line.
It tries to adhere to the Community Best Practices, but it is customizable.
We will ask you some questions, about your project to make working with SRC faster and easier! 🚀
This will generate a .srcrc file in your project root.

? Enter the application folder ...
? Enter Styles Type ...
❯ emotion10
  emotion
  css
  cssModules
? Enter prefered Component Type ...
❯ Functional Component
  Class Component
? Are you using graphQl in the project? (Y/n)
```

These are the current main configuration options. More possibilities are coming in the future, see the Future Plans section at the bottom.

You can override the Configurations by running the `init` command with the `--force` or `-f` Flag

### Configuration Options

| Name            |    Default     | Description                                                                                               |
| :-------------- | :------------: | :-------------------------------------------------------------------------------------------------------- |
| `srcPath`       |    `"src"`     | The directory where the main code lies in                                                                 |
| `stylesType`    |    `"css"`     | The type of the prefered generated stylings. Current options: `css`, `cssModules`, `emotion`, `emotion10` |
| `componentType` | `"functional"` | The prefered generated component style. Current options: `functional`, `class`                            |
| `graphql`       |    `false`     | If graphql is used in the project                                                                         |

### New Component

To create a new Component run the following and answer the questions:

```
  _   _                 ____                 _      ____                                             _
 | \ | | _____      __ |  _ \ ___  __ _  ___| |_   / ___|___  _ __ ___  _ __   ___  _ __   ___ _ __ | |_
 |  \| |/ _ \ \ /\ / / | |_) / _ \/ _` |/ __| __| | |   / _ \| '_ ` _ \| '_ \ / _ \| '_ \ / _ \ '_ \| __|
 | |\  |  __/\ V  V /  |  _ <  __/ (_| | (__| |_  | |__| (_) | | | | | | |_) | (_) | | | |  __/ | | | |_
 |_| \_|\___| \_/\_/   |_| \_\___|\__,_|\___|\__|  \____\___/|_| |_| |_| .__/ \___/|_| |_|\___|_| |_|\__|
                                                                       |_|
? Enter the parent folder to add to (components)
? Enter Folder Name ...
? Enter Component Name ...
? Select Component Type ...
? Create a query file? (Y/n)
```

This will generate an `index.js` file, a `styles.(css|scss|js)` file and a `query.js` file if requested.

<div style="font-size: 25px;font-weight: bold;text-align: center;margin: 32px 0;">Future Plans</div>

- Language Flavors:
  - Add TypeScript support
- Styling Flavors:
  - `scss`
  - `scssModules`
  - `styled-components`
- More Configuration Options
