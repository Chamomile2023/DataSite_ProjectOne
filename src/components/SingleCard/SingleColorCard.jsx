import React from "react";
import "./SingleCard.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const SingleColorCard = () => {
    const [colorData, setColorData] = useState([]);
    const ColorData = async () => {
        const request = await fetch("https://reqres.in/api/unknown");
        const response = await request.json();
        setColorData(response.data);
    };
    useEffect(() => {
        ColorData();
    }, []);
    return <>
        <div className="single">
            <div className="container">
                <div className="single__cards">
                    {colorData.map((item) => {
                        return (
                            <div className="single__card" key={item.id}>
                                <img src={item.avatar} alt="" className="single__card--img" />
                                <h2 className="single__card--title">
                                    {item.first_name + " " + item.last_name}
                                </h2>
                                <p className="single__card--email">{item.email}</p>
                                <Button className="single__card--btn">Copy color</Button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </>;
};

export default SingleColorCard;
