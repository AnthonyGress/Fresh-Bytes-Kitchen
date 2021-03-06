import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c82427",
    },
    secondary: {
      main: "#ffcd27",
    },
    light: {
      main: "#fafafa",
    },
    dark: {
      main: "#0a0a0a",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
