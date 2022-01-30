import React from "react";
import ScanContainer from "./Components/ScanContainer";
import ScanDetails from './Components/scanDetails/ScanDetails'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
        <Route path="/page/:route" element={<ScanDetails />} />
        <Route path="/page" element={<ScanContainer />} />
    </Routes>
  );
}

export default App;


