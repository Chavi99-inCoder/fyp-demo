import React from "react";
import Footer from "../Components/Common/footer";
import Header from "../Components/Common/header";
import { CssBaseline, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5%",
    marginLeft: "5%",
  },
}));

export default function Layout({ main }) {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Header />
      <div className={classes.root}>{main}</div>
      <Footer />
    </div>
  );
}
