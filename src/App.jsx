import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import Users from "./components/Users/Users";
import Unknown from "./components/Unknown/Unknown";
import Main from "./components/Main/Main";
const App = () => {
  //Sidebar
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <>
      <Header setShow={setShow} />
      {/* <SideBar show={show} setClose={setClose} close={close} /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Registration />} />
        <Route path="/users" element={<Users />} />
        <Route path="/unknown" element={<Unknown />} />
      </Routes>
    </>
  );
};

export default App;
