import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tarifeler from './pages/Tarifeler'
import HızTesti from './pages/HızTesti'
import Hakkimizda from './pages/Hakkimizda'
import Referanslar from './pages/Referanslar'
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarifeler" element={<Tarifeler />} />
      <Route path="/hiz-testi" element={<HızTesti />} />
      <Route path="/hakkimizda" element={<Hakkimizda />} />
      <Route path="/referanslar" element={<Referanslar />} />
    </Routes>
  </BrowserRouter>
);

export default App;
