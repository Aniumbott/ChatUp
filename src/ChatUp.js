// GlobalStyle
import GlobalStyle from "./GlobalStyle";
// Modules
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// Components
import { auth } from "./firebase";
import App from "./App";
import SignIn from "./components/SignIn";

// Main function
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
