import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollReveal from "scrollreveal";

import "./style.css";

import Home from "./Pages/Home";
import LostAndFound from "./Pages/LostAndFound";
import BusRoutes from "./Pages/BusRoutes";
import Rules from "./Pages/Rules";
import Track from "./Pages/Track";
import Driver from "./Pages/Drivers";

export default function App() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "50px",
      duration: 700,
      delay: 100,
      easing: "ease-out",
      reset: false,
      interval: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lost-and-found" element={<LostAndFound />} />
        <Route path="/track" element={<Track />} />
        <Route path="/bus-routes" element={<BusRoutes />} />
        <Route path="/drivers" element={<Driver />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
}
