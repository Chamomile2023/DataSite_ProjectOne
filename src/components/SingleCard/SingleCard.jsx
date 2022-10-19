import React from "react";
import "./SingleCard.scss";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleCard = ({ data }) => {
  const { id } = useParams();
  const [idNum, setIdNum] = useState([]);
  const getIdData = async () => {
    const request = await fetch(`https://reqres.in/api/users/${id}`);
    const response = await request.json();
    setIdNum(response);
  };
  useEffect(() => {
    getIdData();
  }, []);
  return (
    <>
      <div className="single">
        <div className="container">
          <div className="single__cards">
            {data.filter((item) => item.id == id).map((item) => {
              return (
                <div className="single__card">
                  <img src={item.avatar} alt="" className="single__card--img" />
                  <h2 className="single__card--title">
                    {item.first_name + " " + item.last_name}
                  </h2>
                  <p className="single__card--email">{item.email}</p>
                  <Button className="single__card--btn">Contact</Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
