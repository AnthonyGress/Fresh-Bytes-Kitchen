import React, { useState } from "react";
import Auth from "../../utils/auth";
import Cart from "../Cart";
import HamburgerMenu from "../HamburgerMenu";

import { Link } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

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
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

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
          {isMobile ? (
            <>
              <HamburgerMenu />
              <div
                style={{
                  position: "absolute",
                  right: "2%",
                }}
              >
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle fontSize="large" />
                </IconButton>
                <Cart />
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
            </>
          ) : (
            <>
              <Typography variant="h6" className={classes.title}>
                FBK
              </Typography>
              <Box style={{ margin: "auto" }}>
                <List component="nav">
                  <ListItem component="div">
                    <ListItemText>
                      <Typography color="inherit">
                        <Link to="/">Home</Link>
                      </Typography>
                    </ListItemText>
                    <ListItemText inset>
                      <Typography color="inherit">
                        <Link to="/about">About</Link>
                      </Typography>
                    </ListItemText>
                    <ListItemText inset>
                      <Typography color="inherit">
                        <Link to="/menu">Menu</Link>
                      </Typography>
                    </ListItemText>
                    <ListItemText inset>
                      <Typography color="inherit">
                        <Link to="/contact">Contact</Link>
                      </Typography>
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
                  <AccountCircle fontSize="large" />
                </IconButton>
                <Cart />
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
            </>
          )}
          {/* <IconButton
            onClick={() => setOpenDrawer(!openDrawer)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon fontSize="large" />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
