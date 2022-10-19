import React from "react";
import "./SingleCard.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleColorCard = ({ colorData }) => {
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
                        {colorData.filter((item) => item.id == id).map((item) => {
                            return (
                                <div className="single__card" key={item.id}>
                                    <div className="single__img">
                                        <div
                                            className="single__card--img1"
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                    </div>
                                    <div className="h2 single--title">
                                        Contrast:
                                        {" " + item.name}
                                    </div>
                                    <div className="single__name ">Color: {item.color}</div>
                                    <div className="single__email">
                                        <p className="single__email--email">Year: {item.year}</p>
                                        <p className="single__email--email">
                                            Pantone value: {item.pantone_value}
                                        </p>
                                    </div>
                                    <Button className="single__btn">Copy color</Button>
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
