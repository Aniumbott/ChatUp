// Additionals
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
// Components
import Menu from "./components/Menu";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Servers from "./components/Servers";
import Reqas from "./components/Reqas";
import Info from "./components/Info";
import Feedback from "./components/Feedback";
import Customize from "./components/Customize";

// Main function
function App() {
  // Additional components
  const [user, setUser] = useState({
    username: auth.currentUser.displayName,
    profilepic: auth.currentUser.photoURL,
    email: auth.currentUser.email,
  });

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route path="/servers" element={<Servers />} />
        <Route path="/reqas" element={<Reqas />} />
        <Route path="/info" element={<Info />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </div>
  );
}

export default App;
