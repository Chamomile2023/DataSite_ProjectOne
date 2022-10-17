import React from 'react';
import Button from '../Button/Button';
import person from '../img/123.jpg'
import './Main.scss'

const Main = () => {
    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="main__hero">
                        <h1 className="main__hero--title">Top Users:</h1>
                        <div className="main__cards">
                            <div className="main__card">
                                <div className="main__img">
                                    <img src={person} alt="person" className="main__img--img" />
                                </div>
                                <div className="main__name">John Doe</div>
                                <div className="main__email">
                                    <p className="main__email--email">kjkjdskjdksfdkjsdhfkshdfkj@jjl</p>
                                </div>
                                <Button className="main__btn">See more</Button>
                            </div>
                            <div className="main__card">
                                <div className="main__img">
                                    <img src={person} alt="person" className="main__img--img" />
                                </div>
                                <div className="main__name">John Doe</div>
                                <div className="main__email">
                                    <p className="main__email--email">kjkjdskjdksfdkjsdhfkshdfkj@jjl</p>
                                </div>
                                <Button className="main__btn">See more</Button>
                            </div>
                            <div className="main__card">
                                <div className="main__img">
                                    <img src={person} alt="person" className="main__img--img" />
                                </div>
                                <div className="main__name">John Doe</div>
                                <div className="main__email">
                                    <p className="main__email--email">kjkjdskjdksfdkjsdhfkshdfkj@jjl</p>
                                </div>
                                <Button className="main__btn">See more</Button>
                            </div>
                            <div className="main__card">
                                <div className="main__img">
                                    <img src={person} alt="person" className="main__img--img" />
                                </div>
                                <div className="main__name">John Doe</div>
                                <div className="main__email">
                                    <p className="main__email--email">kjkjdskjdksfdkjsdhfkshdfkj@jjl</p>
                                </div>
                                <Button className="main__btn">See more</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;