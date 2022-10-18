import React from "react";
import "../Main/Main.scss";
import Button from "../Button/Button";

const Card = () => {
  return (
    <>
      <div className="main__card">
        <div className="main__img">
          <img
            src="https://reqres.in/img/faces/1-image.jpg"
            alt="person"
            className="main__img--img"
          />
        </div>
        <div className="main__name">George Bluth</div>
        <div className="main__email">
          <p className="main__email--email">Email: george.bluth@reqres.in</p>
        </div>
        <Button className="main__btn">See more</Button>
      </div>
    </>
  );
};

export default Card;
