import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import HomeMap from "../components/HomeMap"
import Paper from '@material-ui/core/Paper'
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1300,
    height: 650,
    marginTop: "auto"
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));


const Home = () => {
  const classes = useStyles();

  return (
    <section id="home">
      <Box className="heroImg"></Box>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <HomeMap />
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h4">
                  Restaraunt Hours
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Mon  Closed
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Tue 11:00 AM - 9:00 PM
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Wed 11:00 AM - 9:00 PM
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Thu 11:00 AM - 12:00 AM
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Fri 11:00 AM - 12:00 AM
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Sat 11:00 AM - 12:00 AM
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Sun 11:00 AM - 9:00 PM
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default Home;
