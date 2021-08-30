import React from "react";
import Cart from "../components/Cart";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    <section id="home">
      <Box className="heroImg"></Box>
      <Container>
        <Cart />
        <Typography align="center" variant="h3">
          {"Home"}
        </Typography>
      </Container>
    </section>
  );
};

export default Home;
