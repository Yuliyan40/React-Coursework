//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import React, { useState } from "react";
import Navbar from "./assets/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Metal from "./pages/metal";
import Tvf from "./pages/tvf";
import Games from "./pages/games";
import Anime from "./pages/anime";

// import A7XPage from "./pages/products/metalProd/Avenged_Sevenfold/a7x";
// import KillswitchPage from "./pages/products/metalProd/Killswitch_Engage/killswitch";
// import GodsmackPage from "./pages/products/metalProd/Godsmack/godsmack";
// import LinkinParkPage from "./pages/products/metalProd/Linkin_Park/linkPark";
// import MetallicaPage from "./pages/products/metalProd/Metallica/metallica";
// import ParkwayPage from "./pages/products/metalProd/Parkway_Drive/parkDrive";
// import TriviumPage from "./pages/products/metalProd/Trivium/triv";

// import DNPage from "./pages/products/animeProd/Death_Note/dn";
// import NarutoPage from "./pages/products/animeProd/Naruto/naruto";
// import OPMPage from "./pages/products/animeProd/One_Punch_Man/opm";
// import ScottPage from "./pages/products/animeProd/Scott_Pilgrim/scott";
// import AvatarPage from "./pages/products/animeProd/Avatar/avatar";
// import JojoPage from "./pages/products/animeProd/Jojo/jojo";
// import OPPage from "./pages/products/animeProd/One_Piece/op";

// import DoomPage from "./pages/products/gamesProd/Doom/doom";
// import HaloPage from "./pages/products/gamesProd/Halo/halo";
// import ProPage from "./pages/products/gamesProd/Prototype/pro";
// import GoWPage from "./pages/products/gamesProd/God_of_War/gow";
// import CP2077Page from "./pages/products/gamesProd/Cyberpunk/cp2077";
// import OriPage from "./pages/products/gamesProd/Ori/ori";
// import LethalPage from "./pages/products/gamesProd/Lethal_Company/lc";

// import BR2049Page from "./pages/products/tvfProd/BladeRunner/br2049";
// import SpideyPage from "./pages/products/tvfProd/Spidey/spidey";
// import IronPage from "./pages/products/tvfProd/IronMan/iron";
// import BatPage from "./pages/products/tvfProd/Batman/bat";
// import FlashPage from "./pages/products/tvfProd/TheFlash/flash";
// import OfficePage from "./pages/products/tvfProd/TheOffice/office";
// import BreakingPage from "./pages/products/tvfProd/BreakingBad/breaking";

import DynamicProductPage from "./pages/products/dynamicProducts";
import Register from "./register";
import LogIn from "./login";
import Profile from "./profile";

function App() {
  const [userChanged, setUserChanged] = useState(false);

  return (
    <Router>
      <Navbar key={userChanged} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/metal" element={<Metal />}></Route>
        <Route path="/tvf" element={<Tvf />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/anime" element={<Anime />}></Route>

        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<LogIn onLogin={() => setUserChanged((prev) => !prev)} />}
        />
        <Route path="/profile" element={<Profile />} />

        <Route path="/:category/:name" element={<DynamicProductPage />} />

        {/* 
        <Route path="/metal/a7x" element={<A7XPage />} />
        <Route path="/metal/godsmack" element={<GodsmackPage />} />
        <Route path="/metal/killswitch" element={<KillswitchPage />} />
        <Route path="/metal/linkinpark" element={<LinkinParkPage />} />
        <Route path="/metal/metallica" element={<MetallicaPage />} />
        <Route path="/metal/parkway" element={<ParkwayPage />} />
        <Route path="/metal/trivium" element={<TriviumPage />} /> */}

        {/* 
        <Route path="/anime/death_note" element={<DNPage />} />
        <Route path="/anime/naruto" element={<NarutoPage />} />
        <Route path="/anime/one_punch_man" element={<OPMPage />} />
        <Route path="/anime/scott_pilgrim" element={<ScottPage />} />
        <Route path="/anime/avatar" element={<AvatarPage />} />
        <Route path="/anime/jojo" element={<JojoPage />} />
        <Route path="/anime/one_piece" element={<OPPage />} /> */}

        {/* 
        <Route path="/games/doom" element={<DoomPage />} />
        <Route path="/games/halo" element={<HaloPage />} />
        <Route path="/games/prototype" element={<ProPage />} />
        <Route path="/games/god_of_war" element={<GoWPage />} />
        <Route path="/games/cyberpunk" element={<CP2077Page />} />
        <Route path="/games/ori" element={<OriPage />} />
        <Route path="/games/lethal_company" element={<LethalPage />} /> */}

        {/* 
        <Route path="/tvf/blade_runner2049" element={<BR2049Page />} />
        <Route path="/tvf/spider-man" element={<SpideyPage />} />
        <Route path="/tvf/iron_man" element={<IronPage />} />
        <Route path="/tvf/batman" element={<BatPage />} />
        <Route path="/tvf/the_flash" element={<FlashPage />} />
        <Route path="/tvf/the_office" element={<OfficePage />} />
        <Route path="/tvf/breaking_bad" element={<BreakingPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
