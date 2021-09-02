import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import Typography from "@material-ui/core/Typography";
import Modal from "../Modal";

const useStyles = makeStyles({
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
      },
    },
  },
  flexWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} style={{ maxHeight: "7rem" }}>
              <Box borderBottom={1}>
                <Typography align="center">Help</Typography>
              </Box>
              <Box className={classes.flexWrapper}>
                <Box>
                  <Link href="/" color="inherit">
                    Contact
                  </Link>
                </Box>
                <Box>
                  <Modal />
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Sign up
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} style={{ maxHeight: "7rem" }}>
              <Box borderBottom={1}>
                <Typography align="center">Restaurant Hours</Typography>
              </Box>
              <Box
                className={classes.flexWrapper}
                style={{ flexDirection: "column" }}
              >
                <Box>
                  <Typography color="inherit" align="center">
                    Closed Monday
                  </Typography>
                </Box>
                <Box>
                  <Typography color="inherit" align="center">
                    Tuesday - Sunday, 11:00 AM - 12:00 AM
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} style={{ maxHeight: "7rem" }}>
              <Box borderBottom={1}>
                <Typography align="center">Socials</Typography>
              </Box>
              <Box className={classes.flexWrapper}>
                <Box>
                  <Link href="/" className={classes.root}>
                    <Facebook />
                  </Link>
                </Box>
                <Box>
                  <Link href="/" className={classes.root}>
                    <Twitter />
                  </Link>
                </Box>
                <Box>
                  <Link href="/" className={classes.root}>
                    <Instagram />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
