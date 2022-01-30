import React from "react";
import ScanContainer from "./Components/scanContainer/ScanContainer";
import ScanDetails from './Components/scanDetails/ScanDetails'
import { Routes, Route } from "react-router-dom";


function App() {
  return ( //Two routes. ScanContainer for all scans. ScanDetails is for individual scan details.
    <Routes> 
        <Route path="/page/:route" element={<ScanDetails />} />
        <Route path="/page" element={<ScanContainer />} />
    </Routes>
  );
}

export default App;


