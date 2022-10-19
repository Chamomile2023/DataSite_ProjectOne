import React from "react";
import "./SingleCard.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleColorCard = ({ data }) => {
    const { id } = useParams();
    const [idColorData, setIdColorData] = useState([]);
    const ColorData = async () => {
        const request = await fetch(`https://reqres.in/api/unknown/${id}`);
        const response = await request.json();
        setIdColorData(response.data);
    };
    useEffect(() => {
        ColorData();
    }, []);
    console.log(idColorData);
    return (
        <>
            <div className="single">
                <div className="container">
                    <div className="single__cards">
                        {data
                            .filter((item) => item.id === id)
                            .map((item) => {
                                return (
                                    <div className="single__card" key={item.id}>
                                        <img
                                            src={item.avatar}
                                            alt=""
                                            className="single__card--img"
                                        />
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
        </>
    );
};

export default SingleColorCard;
