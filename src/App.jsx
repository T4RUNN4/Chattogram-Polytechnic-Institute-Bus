import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./Pages/Home";
import LostAndFound from "./Pages/LostAndFound";
import BusRoutes from "./Pages/BusRoutes";
import Rules from "./Pages/Rules";
import Track from "./Pages/Track";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lost-and-found" element={<LostAndFound />} />
        <Route path="/track" element={<Track />} />
        <Route path="/bus-routes" element={<BusRoutes />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
}
