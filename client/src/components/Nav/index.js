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
        <ul className="flex-row">
          <Link to="/" m={4}>
            Home
          </Link>
          <Link to="/">About</Link>
          <Link to="/">Menu</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">Contact</Link>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <Link to="/" m={4}>
            Home
          </Link>
          <Link to="/">About</Link>
          <Link to="/">Menu</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">Contact</Link>
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
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
        {" "}
        {/* <List component="nav">
          <ListItem component="div">
            <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                Home
              </TypoGraphy>
            </ListItemText>

            <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                Posts
              </TypoGraphy>
            </ListItemText>

            <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                Contact
              </TypoGraphy>
            </ListItemText>
          </ListItem>
        </List> */}
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
