import React from "react";
import { makeStyles, OutlinedInput } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    borderRadius: "24px",
    height: "44px",
  },
});

export const SearchBar = () => {
  const { input } = useStyles();
  return (
    <OutlinedInput className={input} placeholder="Search..." fullWidth type="search" />
  );
};
