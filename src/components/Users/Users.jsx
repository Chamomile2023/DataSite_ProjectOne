import React from "react";
import "./Users.scss";

const Users = ({ data }) => {
  return (
    <>
      <div className="users">
        <div className="container">
          <div className="users__hero">
            {data && data.map((item) => {
              return (<div className="main__card" key={item.id}>
                <div className="main__img">
                  <img
                    src={item?.avatar}
                    alt="person"
                    className="main__img--img"
                  />
                </div>
                {/* <div className="main__name">{item?.first_name + " " + item?.last_name}</div> */}
                <div className="main__email">
                  <p className="main__email--email">
                    Email: {item?.email}
                  </p>
                </div>
                <Button className="main__btn">See more</Button>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
