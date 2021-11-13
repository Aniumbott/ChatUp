// import logo from "./logo.svg";
import Menu from "./components/Menu";
import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
