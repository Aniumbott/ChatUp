// Additionals
import React, { useState, useEffect } from "react";
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
import SetUser from "./components/SetUser";
import bg from "./images/4.jpg";

// Main function
function App() {
  // console.log(auth.currentUser);
  const [user, setUser] = useState({
    username: auth.currentUser.displayName,
    profilepic: auth.currentUser.photoURL,
    email: auth.currentUser.email,
    customize: {
      wallpaper: bg,
      color_1: "#000000",
      color_2: "#fe9c26",
    },
    id: auth.currentUser.uid,
  });

  const [theme, setTheme] = useState({
    color_1: user.customize.color_1,
    color_2: user.customize.color_2,
  });

  useEffect(() => {
    setTheme({
      color_1: user.customize.color_1,
      color_2: user.customize.color_2,
    });
  }, [user]);

  return (
    <div className="App">
      <SetUser setUser={setUser} user={user} setTheme={setTheme} />
      <ThemeProvider theme={theme}>
        <Menu user={user} />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <Profile
                  user={user}
                  setUser={setUser}
                  theme={theme}
                  setTheme={setTheme}
                />
              }
            />
            <Route path="/servers" element={<Servers />} />
            <Route path="/reqas" element={<Reqas />} />
            <Route path="/info" element={<Info />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
