import React from "react";
import { Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroCard: {
    position: "absolute",
    left: "25%",
    top: "41%",
    zIndex: "9999",
  },
  paper: {
    minWidth: "55vw",
    minHeight: "20vh",
  },
  text: {
    fontFamily: "'Courgette', cursive",
    fontSize: "5rem",
  },
  flexWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
}));

const HeroCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.heroCard}>
      <Paper elevation={15} className={classes.paper}>
        <Box className={classes.flexWrapper}>
          <Typography className={classes.text} align="center">
            {"Fresh Bytes Kitchen"}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default HeroCard;
