import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbartop from "./components/Navbartop";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar-top">
          <Navbartop></Navbartop>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>{" "}
        <div>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
