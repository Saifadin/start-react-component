const getStyles = (type, componentName) => {
  if (type === "emotion10")
    return `import styled from '@emotion/styled';

export const Wrapper = styled.div\`\`;
`;

  if (type === "emotion")
    return `import styled from 'react-emotion';

export const Wrapper = styled('div')\`\`;
`;

  if (type === "css")
    return `.${componentName}--wrapper {}
`;

  if (type === "cssModules")
    return `.wrapper {}
`;

  throw new Error("You selected an invalid style type");
};

module.exports = (type = "emotion10", componentName) => {
  return getStyles(type, componentName);
};
