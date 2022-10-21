import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import "./App.scss";
import Users from "./components/Users/Users";
import Unknown from "./components/Unknown/Unknown";
import Main from "./components/Main/Main";
import Loading from "./components/Loading/Loading";
import RealSidebar from "./components/RealSidebar/RealSidebar";
import SingleCard from "./components/SingleCard/SingleCard";
import SingleColorCard from "./components/SingleCard/SingleColorCard";
import Profile from "./components/Profile/Profile";
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
    const request = await fetch(`https://reqres.in/api/users?page=1`);
    const response = await request.json();
    setData(response.data);
    setLoading(true);
  };
  useEffect(() => {
    getData();
  }, []);

  const [colorData, setColorData] = useState([]);
  const ColorData = async () => {
    const request = await fetch("https://reqres.in/api/unknown");
    const response = await request.json();
    setColorData(response.data);
  };
  useEffect(() => {
    ColorData();
  }, []);
  return (
    <>
      <Header setShow={setShow} />
      <RealSidebar data={data} />
      <Routes>
        <Route
          path="/"
          element={loading ? <Main data={data} /> : <Loading />}
        />
        {/* <Route path="/sign-in" element={loading ? <Login /> : <Loading />} />
        <Route
          path="/sign-up"
          element={loading ? <Registration /> : <Loading />}
        /> */}
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
          element={loading ? <SingleCard data={data} /> : <Loading />}
        />
        <Route
          path="/unknown/:id"
          element={
            loading ? <SingleColorCard colorData={colorData} /> : <Loading />
          }
        />
        <Route path="/profile" element={loading ? <Profile /> : <Loading />} />
      </Routes>
    </>
  );
};

export default App;
