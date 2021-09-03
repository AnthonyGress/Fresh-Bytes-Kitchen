import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
const drawerWidth = 240;

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
  drawer: {
    // width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box
          className={classes.drawerHeader}
          style={{
            background: "var(--primary)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon style={{ color: "var(--light)" }} fontSize="large" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            style={{ display: "inline-block", color: "var(--light)" }}
          >
            FBK
          </Typography>
        </Box>
        <Divider />
        <List>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            className={classes.nav}
          >
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            className={classes.nav}
          >
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            className={classes.nav}
          >
            <ListItemText>
              <Link to="/menu">Menu</Link>
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            className={classes.nav}
          >
            <ListItemText>
              <Link to="/order">Order</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        FBK
      </Typography>
    </>
  );
}
export default DrawerComponent;
