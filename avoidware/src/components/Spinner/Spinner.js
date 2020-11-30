import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./Spinner.css";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#66fcf1",
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

<div className="outer_container">
  <LinearProgress height="50px" color="secondary" />
</div>;

// <div className={classes.root}>
//   <LinearProgress />
//   <LinearProgress color="secondary" />
// </div>

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  );
}
