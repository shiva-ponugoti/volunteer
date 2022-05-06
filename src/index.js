import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Channels from "./pages/Channels";
import ChannelDetails from "./pages/ChannelDetails";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import NavBar from "./pages/NavBar";

import { theme } from "./theme";

import "./index.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="signup" element={<SignUp />} />
        <Route exact path="signin" element={<SignIn />} />
        <Route
          exact
          path="channels"
          element={
            <>
              <NavBar />
              <Channels />
            </>
          }
        />
        <Route
          exact
          path="channels/:channelId"
          element={
            <>
              <NavBar />
              <ChannelDetails />
            </>
          }
        />
        <Route
          exact
          path="events"
          element={
            <>
              <NavBar />
              <Events />
            </>
          }
        />
        <Route
          exact
          path="events/:eventId"
          element={
            <>
              <NavBar />
              <EventDetails />
            </>
          }
        />
        <Route exact path="/" element={<SignIn />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
