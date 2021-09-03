import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import HomeMap from "../components/HomeMap";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Carousel from 'react-material-ui-carousel'
import Item from 'react-material-ui-carousel'
import HeroCard from "../components/HeroCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1300,
    height: 650,
    marginTop: "auto",
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <section id="home">
      <HeroCard />
      {/* <Box className="heroImg"></Box> */}
    </section>
  );
};

export default Home;
