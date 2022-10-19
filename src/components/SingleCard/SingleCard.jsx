import React from "react";
import "./SingleCard.scss";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
const SingleCard = ({ data }) => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className="single">
        <div className="container">
          <div className="single__cards">
            {data.map((item) => {
              return (
                <div className="single__card" key={item.id}>
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
