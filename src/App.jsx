import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
