import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TestButton } from "./components/TestButton/TestButton";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp.jsx";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./muitheme.js";
// import bgphoto from "./img/test.jpg";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <TestButton />
      // </div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* <Box sx={{ backgroundImage: `url(${bgphoto})` }}> */}
          {/* </Box> */}
        </Routes>
      </ThemeProvider>
    );
  }
}

export default App;
