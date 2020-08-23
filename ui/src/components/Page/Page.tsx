import { AppBar, Grid, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import BrightnessIcon from "@material-ui/icons/Brightness4";

type Props = {
  children: React.ReactNode;
};

const useStyles = makeStyles({
  grid: {
    minHeight: "100vh",
  },
  column: {
    width: "50%",
  },
});

export const Page = ({ children }: Props) => {
  const { grid, column } = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="end">
            <BrightnessIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid
        container
        className={grid}
        alignContent="center"
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid className={column} item>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
