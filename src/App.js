// Additionals
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { ThemeProvider } from "styled-components";
// Components
import Menu from "./components/Menu";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Servers from "./components/Servers";
import Reqas from "./components/Reqas";
import Info from "./components/Info";
import Feedback from "./components/Feedback";
import Customize from "./components/Customize";
import bg from "./images/4.jpg";
// Main function
function App() {
  // Additional components
  const [user, setUser] = useState({
    username: auth.currentUser.displayName,
    profilepic: auth.currentUser.photoURL,
    email: auth.currentUser.email,
    customize: {
      wallpaper: bg,
      color_1: "#222222",
      color_2: "#aa00aa",
    },
  });

  const theme = {
    color_1: user.customize.color_1,
    color_2: user.customize.color_2,
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Menu user={user} />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route path="/servers" element={<Servers />} />
            <Route path="/reqas" element={<Reqas />} />
            <Route
              path="/customize"
              element={<Customize user={user} setUser={setUser} />}
            />
            <Route path="/info" element={<Info />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
