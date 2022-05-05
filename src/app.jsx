import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/index";
import ArithmeticJS from "./pages/javascript/003_Aritmatik";
import DataTypeJS from "./pages/javascript/002_TipeData";
import WelcomeJS from "./pages/javascript/0_index";
import PengenalanJS from "./pages/javascript/001_Pengenalan";
import PengkondisianJS from "./pages/javascript/005_Pengkondisian";
import PerulanganJS from "./pages/javascript/004_Perulangan";
import FungsiJS from "./pages/javascript/006_Fungsi";
import KonsepArrayJS from "./pages/javascript/007_KonsepArray";
import ManipulasiArrayJS from "./pages/javascript/008_ManipulasiArray";
import KonsepObjectJS from "./pages/javascript/009_KonsepObject";
import ManipulasiObjectJS from "./pages/javascript/010_ManipulasiObject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />

        {/* Javascript Route */}
        <Route path="/javascript" element={<WelcomeJS />} />
        <Route path="/javascript/pengenalan" element={<PengenalanJS />} />
        <Route path="/javascript/variabel-dan-tipe-data" element={<DataTypeJS />} />
        <Route path="/javascript/operator-aritmatik" element={<ArithmeticJS />} />
        <Route path="/javascript/perulangan" element={<PerulanganJS />} />
        <Route path="/javascript/pengkondisian" element={<PengkondisianJS />} />
        <Route path="/javascript/fungsi" element={<FungsiJS />} />
        <Route path="/javascript/konsep-array" element={<KonsepArrayJS />} />
        <Route path="/javascript/manipulasi-array" element={<ManipulasiArrayJS />} />
        <Route path="/javascript/konsep-objek" element={<KonsepObjectJS />} />
        <Route path="/javascript/manipulasi-objek" element={<ManipulasiObjectJS />} />
        {/* End Javascript Route */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
