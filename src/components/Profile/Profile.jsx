import React from "react";
import './Profile.scss'
import img from '../img/minion.jpg'

const Profile = () => {
    return <>
        <div className="profile">
            <div className="container">
                <div className="profile__hero">
                    <div className="profile__card">
                        <div className="profile__color"></div>
                        <img src={img} alt="" className="profile__img" />
                        <h1 className="profile--title">Jumaboeva Sarvinoz</h1>
                        <p className="profile--job">Web Developer</p>
                        <p className="profile--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo incidunt deserunt!</p>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Profile;
