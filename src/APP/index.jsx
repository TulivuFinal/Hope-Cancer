import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// All Pages
import Landing from "./Pages/Landing";

import SignIn from "./Pages/Sign";

import SignUp from "./Pages/SignUp";

import NotFound from "./Pages/404";

import Dashboard from "./Pages/Dashboard";

import Activities from "./Pages/Dashboard/Activites";
import Doctors from "./Pages/Dashboard/Doctors";

/////////////////

const APP = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<Doctors />} />
          <Route path="activites" element={<Activities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default APP;
