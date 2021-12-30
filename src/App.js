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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route path="/servers" element={<Servers user={user} />} />
            <Route path="/reqas" element={<Reqas />} />
            <Route path="/info" element={<Info />} />
            <Route path="/feedback" element={<Feedback />} />

            {/* Servers */}
            <Route
              path="/server/business"
              element={<Chatapp user={user} server="business" />}
            />
            <Route
              path="/server/entertainment"
              element={<Chatapp user={user} server="entertainment" />}
            />
            <Route
              path="/server/health"
              element={<Chatapp user={user} server="health" />}
            />
            <Route
              path="/server/politics"
              element={<Chatapp user={user} server="politics" />}
            />
            <Route
              path="/server/sports"
              element={<Chatapp user={user} server="sports" />}
            />
            <Route
              path="/server/technology"
              element={<Chatapp user={user} server="technology" />}
            />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
