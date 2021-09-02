import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import Typography from "@material-ui/core/Typography";
import Modal from "../Modal"

const useStyles = makeStyles({
    root: {
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
            },
        },
    },
});

export default function Footer() {
    const classes = useStyles();
    
    return <footer>
        <Box>
            <Container maxWidth='lg'>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
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
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Restaurant Hours</Box>
                        <Box>
                            <Typography color="inherit">
                                Closed Monday
                            </Typography>
                        </Box>
                        <Box>
                            <Typography color="inherit">
                                Tuesday through Sunday, 11:00 AM - 12:00 AM
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Socials</Box>
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
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
}
