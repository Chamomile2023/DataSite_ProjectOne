import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Users.scss";

const Users = ({ data }) => {
  // const [newData, setNewData] = useState(data)
  // const [loadNumber] = useState(2)
  // const loadBtn = () => {
  //   fetch(`https://reqres.in/api/users?page=${loadNumber}`)
  //     .then(res => res.json())
  //     .then(loaded => setNewData([...newData, loaded.data]))
  //   console.log(newData);
  // }

  // const [newData, setNewData] = useState([])
  // const [visual, setVisual] = useState(2)

  // useEffect(() => {
  //   fetch("https://reqres.in/api/users?page")
  //     .then(request => request.json())
  //     .then(data => setNewData(data))
  // })
  // const showMore = () => {
  //   setVisual((prev) => prev + [...newData])
  // }
  return (
    <>
      <div className="users">
        <div className="container">
          {<div className="users__hero">
            {data.map((item) => {
              return (<div className="main__card" key={item.id}>
                <div className="main__img">
                  <img
                    src={item?.avatar}
                    alt="person"
                    className="main__img--img"
                  />
                </div>
                <div className="main__name">{item?.first_name + " " + item?.last_name}</div>
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
          }
          <Button className="users__load">Load More</Button>
        </div>
      </div>
    </>
  );
};

export default Users;
