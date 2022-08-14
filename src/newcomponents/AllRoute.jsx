import React from "react";
import { Route , Routes } from "react-router-dom";
import Navbar from "./Navbar";

import Page2 from '../components/Page2';
import Page from "../components/Page-1";
import Page3 from "../components/Page3"

const AllRoute = () => {
  return (
    <div>
      <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<div><Page/> </div>} />
        <Route path="/users" element={<div> <Page2/> </div>} />
        <Route path="/task" element={<div><Page3/> </div>} />
      </Routes>
    </div>
    </div>
  );
};

export default AllRoute;
