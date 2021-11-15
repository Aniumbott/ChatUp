// GlobalStyle
import GlobalStyle from "./GlobalStyle";
// Additionals
import { Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
// Components
import { auth } from "./firebase";
import Menu from "./components/Menu";
import Home from "./components/Home";
import User from "./components/User";
import Servers from "./components/Servers";
import Reqas from "./components/Reqas";
import Info from "./components/Info";
import Feedback from "./components/Feedback";
import SignIn from "./components/SignIn";
import Customize from "./components/Customize";
import styled from "styled-components";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <GlobalStyle />
      {user ? (
        <div className="App">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/reqas" element={<Reqas />} />
            <Route path="/info" element={<Info />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/customize" element={<Customize />} />
          </Routes>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;
