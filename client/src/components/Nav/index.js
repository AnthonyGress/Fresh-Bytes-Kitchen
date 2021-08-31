import React from "react";
import Auth from "../../utils/auth";
import CartDrawer from "../CartDrawer";

import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // title: {
  //   flexGrow: 1,
  // },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userActions = () => {
    if (Auth.loggedIn()) {
      return (
        <div>
          <Link to="/account">
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Link>
          <Link to="/orderHistory">
            <MenuItem onClick={handleClose}>Order History</MenuItem>
          </Link>

          <a href="/">
            <MenuItem onClick={() => Auth.logout()}>Logout</MenuItem>
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">
            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem onClick={handleClose}>Login</MenuItem>
          </Link>
        </div>
      );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "var(--primary" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            FBK
          </Typography>
          <Box style={{ margin: "auto" }}>
            <List component="nav">
              <ListItem component="div">
                <ListItemText>
                  <TypoGraphy color="inherit">
                    <Link to="/">Home</Link>
                  </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                  <TypoGraphy color="inherit">
                    <Link to="/about">About</Link>
                  </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                  <TypoGraphy color="inherit">
                    <Link to="/menu">Menu</Link>
                  </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                  <TypoGraphy color="inherit">
                    <Link to="/contact">Contact</Link>
                  </TypoGraphy>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <CartDrawer />
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {userActions()}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
