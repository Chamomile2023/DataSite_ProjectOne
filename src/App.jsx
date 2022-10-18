import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import Users from "./components/Users/Users";
import Unknown from "./components/Unknown/Unknown";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";
import axios from "axios";
const App = () => {
  //Sidebar
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  //fetch
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get("https://reqres.in/api/users?page")
  //     .then(response => {
  //       console.log(response)
  //       setData(response.data)
  //     })
  //     .catch(err => { console.log(err) })
  // });
  const getData = async () => {
    const request = await fetch("https://reqres.in/api/users?page");
    const response = await request.json();
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <Header setShow={setShow} />
      <Routes>
        <Route path="/" element={<Main data={data} />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Registration />} />
        <Route path="/users" element={<Users data={data} />} />
        <Route path="/unknown" element={<Unknown data={data} />} />
      </Routes>
      {/* <SideBar show={show} setClose={setClose} close={close} /> */}
    </>
  );
};

export default App;
