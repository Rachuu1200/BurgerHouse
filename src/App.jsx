import React from "react";
import { BrowserRouter, Router, Routes,Route } from "react-router-dom";
import FoodMenu from "./components/FoodMenu";
import FoodMenu2 from "./component2/FoodMenu2"
import FoodDetails from "./component2/FoodDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FoodMenu />} />
        <Route path="/foodmenu2" element={<FoodMenu2 />} />
         <Route path="/food/:id" element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
