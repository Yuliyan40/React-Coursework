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

import A7XPage from "./pages/products/metalProd/Avenged Sevenfold/a7x";
import KillswitchPage from "./pages/products/metalProd/Killswitch Engage/killswitch";
import GodsmackPage from "./pages/products/metalProd/Godsmack/godsmack";
import LinkinParkPage from "./pages/products/metalProd/Linkin Park/linkPark";
import MetallicaPage from "./pages/products/metalProd/Metallica/metallica";
import ParkwayPage from "./pages/products/metalProd/Parkway Drive/parkDrive";
import TriviumPage from "./pages/products/metalProd/Trivium/triv";

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

        <Route path="/metal/a7x" element={<A7XPage />} />
        <Route path="/metal/godsmack" element={<GodsmackPage />} />
        <Route path="/metal/killswitch" element={<KillswitchPage />} />
        <Route path="/metal/linkinpark" element={<LinkinParkPage />} />
        <Route path="/metal/metallica" element={<MetallicaPage />} />
        <Route path="/metal/parkway" element={<ParkwayPage />} />
        <Route path="/metal/trivium" element={<TriviumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
