const getPrimaryColor = ({ theme: { palette } }) =>
  palette.type === "light" ? palette.secondary.main : palette.primary.main;

const getSecondaryColor = ({ theme: { palette } }) =>
  palette.type === "light" ? palette.primary.main : palette.secondary.main;

export { getPrimaryColor, getSecondaryColor };
