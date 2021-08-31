import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Account = () => {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }
  console.log(user);
  return (
    <section id="account">
      <Container>
        <Typography align="center" variant="h3">
          {"My Account"}
        </Typography>
        <Box></Box>
      </Container>
    </section>
  );
};

export default Account;