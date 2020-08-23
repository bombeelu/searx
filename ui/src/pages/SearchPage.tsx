import React from "react";
import { Page, SearchBar } from "components";
import { Grid, Typography } from "@material-ui/core";

export const SearchPage = () => {
  return (
    <>
      <Page>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Typography variant="h2" align="center">
              Welcome to bombee.land, bitch.
            </Typography>
          </Grid>
          <Grid item>
            <SearchBar />
          </Grid>
        </Grid>
      </Page>
    </>
  );
};
