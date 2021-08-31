import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import HomeMap from "../components/HomeMap"
import Paper from '@material-ui/core/Paper'

const Home = () => {
  return (
    <section id="home">
      <Box className="heroImg"></Box>
      <Container>
        <Typography align="center" variant="h3" margin="auto">
          {"Home"}
        </Typography>
        
        <HomeMap/>
      </Container>
    </section>
  );
};

export default Home;
