import React from "react";
import '../Main/Main.scss'
import './Unknown.scss'
import Button from "../Button/Button";
import { useState } from "react";
import { useEffect } from "react";

const Unknown = () => {
  const [colorData, setColorData] = useState([]);
  const ColorData = async () => {
    const request = await fetch("https://reqres.in/api/unknown")
    const response = await request.json()
    setColorData(response.data)
  }
  useEffect(() => {
    ColorData()
  }, [])
  return <>
    <div className="unknown">
      <div className="container">
        <div className="unknown__hero">
          <div className="unknown__cards">
            {colorData.map((color) => {
              return (
                <div className="main__card">
                  <div className="main__img">
                    <div className={`main--circle ${color.color}`}></div>
                  </div>
                  <div className="main__name ">Color: {color.color}</div>
                  <div className="main__email">
                    <p className="main__email--email">Year: {color.year}</p>
                    <p className="main__email--email">Pantone value: {color.pantone_value}</p>
                  </div>
                  <Button className="main__btn">See more</Button>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div></>;
};

export default Unknown;
