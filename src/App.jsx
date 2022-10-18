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
import Loading from "./components/Loading/Loading";
import RealSidebar from "./components/RealSidebar/RealSidebar";
import SingleCard from "./components/SingleCard/SingleCard";
const App = () => {
  //Loader
  const [loading, setLoading] = useState(false);
  //Sidebar
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  //fetch
  const [data, setData] = useState([]);
  const getData = async () => {
    setLoading(false);
    const request = await fetch("https://reqres.in/api/users?page");
    const response = await request.json();
    setData(response.data);
    setLoading(true);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header setShow={setShow} />
      {/* <RealSidebar /> */}
      <Routes>
        <Route
          path="/"
          element={loading ? <Main data={data} /> : <Loading />}
        />
        <Route path="/sign-in" element={loading ? <Login /> : <Loading />} />
        <Route
          path="/sign-up"
          element={loading ? <Registration /> : <Loading />}
        />
        <Route
          path="/users"
          element={loading ? <Users data={data} /> : <Loading />}
        />
        <Route
          path="/unknown"
          element={loading ? <Unknown data={data} /> : <Loading />}
        />
        <Route
          path="/users/:id"
          element={loading ? <SingleCard /> : <Loading />}
        />
      </Routes>
      {/* <SideBar show={show} setClose={setClose} close={close} /> */}
    </>
  );
};

export default App;
