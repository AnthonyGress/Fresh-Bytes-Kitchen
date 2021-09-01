import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import TextField from "@material-ui/core/TextField";
import { makeStyles, styled } from "@material-ui/core/styles";
import { Container, Box, Button, Typography, Card } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const MyCard = styled(Card)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});
function Signup(props) {
  const classes = useStyles();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section>
      <Typography align="center" variant="h3">
        {"Sign Up"}
      </Typography>
      <Link to="/login">
        <Typography style={{ color: "var(--light" }}>
          {"← Go to Login"}
        </Typography>
      </Link>
      <Container
        className="d-flex justify-content-center"
        style={{ width: "50%", marginTop: "5%" }}
      >
        <Card
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            paddingTop: "5%",
            paddingBottom: "5%",
          }}
        >
          <form
            className={classes.root}
            autoComplete="off"
            onSubmit={handleFormSubmit}
          >
            <Box className="d-flex align-items-center col">
              <TextField
                placeholder="First"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
                label="First Name"
                multiline
                color="primary"
                required={true}
              />
              <TextField
                placeholder="Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
                label="Last Name"
                multiline
                color="primary"
                required={true}
              />
              <TextField
                placeholder="Password"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
                label="Email"
                multiline
                color="primary"
                required={true}
              />
              <TextField
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
                label="Password"
                multiline
                color="primary"
                required={true}
              />
            </Box>
            <Box boxShadow={5} mt={4}>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                fullWidth={true}
              >
                {"Submit"}
              </Button>
            </Box>
          </form>
        </Card>
      </Container>
    </section>
  );
}
/* <>
   <div className="container">
        <Link to="/login">← Go to Login</Link>
        <h2>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div> 
      </>
  */
export default Signup;
