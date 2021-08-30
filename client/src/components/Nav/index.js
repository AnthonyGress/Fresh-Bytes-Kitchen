import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";

function Nav(props) {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <ListItemText inset>
            <TypoGraphy color="inherit">
              <Link to="/orderHistory">Order History</Link>
            </TypoGraphy>
          </ListItemText>
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <ListItemText inset>
            <TypoGraphy color="inherit">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </TypoGraphy>
          </ListItemText>
        </>
      );
    } else {
      return (
        <ListItemText inset>
          <TypoGraphy color="inherit">
            <Link to="/signup">Sign Up/</Link>
            <Link to="/login">Login</Link>
          </TypoGraphy>
        </ListItemText>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="logo"></span>
          Fresh Bytes Kitchen
        </Link>
      </h1>

      <nav>
        <List component="nav">
          <ListItem component="div">
            <ListItemText inset>
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
            {showNavigation()}
          </ListItem>
        </List>
      </nav>
    </header>
  );
}

export default Nav;
