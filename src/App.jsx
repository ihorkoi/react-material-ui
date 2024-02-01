import React, { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp.jsx";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./muitheme.js";
import { Header } from "./components/Header/Header.jsx";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
              </div>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    );
  }
}

export default App;
