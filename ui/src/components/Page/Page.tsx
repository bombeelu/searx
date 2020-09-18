import React from "react";
import { AppBar, Grid, makeStyles, Toolbar } from "@material-ui/core";
import { ThemeToggle } from "components";

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
          <ThemeToggle />
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
