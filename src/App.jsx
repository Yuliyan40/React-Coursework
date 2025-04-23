//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./assets/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Metal from "./pages/metal";
import Tvf from "./pages/tvf";
import Games from "./pages/games";
import Anime from "./pages/anime";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/metal" element={<Metal />}></Route>
        <Route path="/tvf" element={<Tvf />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/anime" element={<Anime />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
