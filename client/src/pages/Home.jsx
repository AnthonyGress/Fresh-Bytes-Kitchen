import React from "react";
import Cart from "../components/Cart";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import heroImg from "../assets/images/chefDrizzle.jpeg";

const Home = () => {
  return (
    <section id="home">
      <Container>
        <Cart />
        <Typography align="center" variant="h3">
          {"Home"}
        </Typography>
      </Container>
      <Box className="heroImg"></Box>
    </section>
  );
};

export default Home;
