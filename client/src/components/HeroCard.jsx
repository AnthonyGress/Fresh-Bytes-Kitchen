import React from "react";
import { Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from '../assets/images/logo2.png'

const useStyles = makeStyles((theme) => ({
  heroCard: {
    // position: "absolute",
    // left: "25%",
    // top: "20%",
    // zIndex: "9999",
  },
}));

const HeroCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroCard} align='center' style={{paddingTop: '6rem'}}>
      <img src={Logo} alt='logo' />
    </div>
  );
};

export default HeroCard;
