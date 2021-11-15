// GlobalStyle
import GlobalStyle from "./GlobalStyle";
// Additionals
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// Components
import { auth } from "./firebase";
import App from "./App";
import SignIn from "./components/SignIn";

function ChatUp() {
  const [isloged] = useAuthState(auth);

  return (
    <>
      <GlobalStyle />
      {isloged ? <App /> : <SignIn />}
    </>
  );
}

export default ChatUp;
