const styleImport = {
  emotion10: "import { Wrapper } from './styles';",
  emotion: "import { Wrapper } from './styles';",
  css: "import './styles.css';",
  cssModules: "import styles from './styles.css';"
};

const getStartTagName = componentName => ({
  emotion10: "Wrapper",
  emotion: "Wrapper",
  css: `div className="${componentName}--wrapper"`,
  cssModules: "div className={styles.wrapper}"
});

const getEndTagName = () => ({
  emotion10: "Wrapper",
  emotion: "Wrapper",
  css: "div",
  cssModules: "div"
});

module.exports = (name = "Component", styleType = "emotion10") => {
  if (!styleImport[styleType]) throw new Error("You selected an invalid style type");

  return `import React from 'react';

${styleImport[styleType]}

const ${name} = () => {
  return (
    <${getStartTagName(name)[styleType]}>
      ComponentContent goes here
    </${getEndTagName()[styleType]}>
  );
};

export default ${name};
`;
};
