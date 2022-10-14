import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Button from "./components/Button/Button";

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
