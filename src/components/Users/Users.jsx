import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Users.scss";

const Users = ({ data }) => {
  const [newData, setNewData] = useState([]);
  const [page, setPage] = useState(3);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}?per_page`)
      .then((request) => request.json())
      .then((response) => setNewData(response.data));
  }, []);
  console.log(newData);
  const showMore = () => {
    setPage((prev) => prev + 3);
  };
  return (
    <>
      <div className="users">
        <div className="container">
          {
            <div className="users__hero">
              {data.slice(0, 6).map((item) => {
                return (
                  <div className="main__card" key={item.id}>
                    <div className="main__img">
                      <img
                        src={item?.avatar}
                        alt="person"
                        className="main__img--img"
                      />
                    </div>
                    <div className="main__name">
                      {item?.first_name + " " + item?.last_name}
                    </div>
                    <div className="main__email">
                      <p className="main__email--email">Email: {item?.email}</p>
                    </div>
                    <Button className="main__btn">See more</Button>
                  </div>
                );
              })}
            </div>
          }
          <Button
            onClick={() => { showMore }}
            className="users__load"
          >
            Load More
          </Button>
        </div>
      </div>
    </>
  );
};

export default Users;
