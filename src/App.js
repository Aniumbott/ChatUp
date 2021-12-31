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
import SetUser from "./components/SetUser";
import bg from "./images/4.jpg";
import Chatapp from "./components/Chatapp";

// Main function
function App() {
  const [user, setUser] = useState({
    username: auth.currentUser.displayName,
    profilepic: auth.currentUser.photoURL,
    email: auth.currentUser.email,
    customize: {
      wallpaper: bg,
      color_1: "#222222",
      color_2: "#fe9c26",
    },
    id: auth.currentUser.uid,
  });

  // Universal theme
  let theme = {
    color_1: user.customize.color_1,
    color_2: user.customize.color_2,
  };

  return (
    <div className="App">
      <SetUser setUser={setUser} user={user} />
      <ThemeProvider theme={theme}>
        <Menu user={user} />
        <div className="main-container">
          {/* <RoutesRender /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route path="/servers" element={<Servers user={user} />} />

            {/* Servers */}
            <Route
              path="servers/business"
              element={<Chatapp user={user} server="Business" />}
            />
            <Route
              path="servers/entertainment"
              element={<Chatapp user={user} server="Entertainment" />}
            />
            <Route
              path="servers/health"
              element={<Chatapp user={user} server="Health" />}
            />
            <Route
              path="servers/politics"
              element={<Chatapp user={user} server="Politics" />}
            />
            <Route
              path="servers/sports"
              element={<Chatapp user={user} server="Sports" />}
            />
            <Route
              path="servers/technology"
              element={<Chatapp user={user} server="Technology" />}
            />

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
