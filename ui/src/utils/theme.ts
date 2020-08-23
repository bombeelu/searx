import { createMuiTheme } from "@material-ui/core";

export const lightTheme = () => {
  return createMuiTheme({
    palette: {
      type: "light",
    },
  });
};

export const darkTheme = () => {
  return createMuiTheme({
    palette: {
      type: "dark",
    },
  });
};
