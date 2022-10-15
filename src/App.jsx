import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import Users from "./components/Users/Users";
import Unknown from "./components/Unknown/Unknown";

const App = () => {
  return (
    <>
      <Header />
      {/* <SideBar /> */}
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/unknown" element={<Unknown />} />
      </Routes>
    </>
  );
};

export default App;
