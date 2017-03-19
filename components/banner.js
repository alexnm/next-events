import React from "react";
import Dictionary from "../config/dictionary";

const Banner = ( ) => (
    <div className="above-the-fold" id="home">
        <style jsx>{ `
            .above-the-fold {
                background-image: url( "/static/images/cover.jpg" );
                background-size: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                height: 100vh;
                position: relative;
                color: #eee;
            }

            .above-the-fold .centered-text {
                position: absolute;
                height: 200px;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
            }

            .above-the-fold h1 {
                color: #f1c40f;
                font-size: 3rem;
                margin: 30px;
            }

            .overlay {
                background: -webkit-radial-gradient(circle, rgba(0,0,0,0.5), #2F2727);
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }
        ` }</style>
        <div className="overlay" />
        <div className="centered-text">
            <h1>{ Dictionary.event.name }</h1>
            <h2>{ Dictionary.event.period }</h2>
            <p>{ Dictionary.event.place }</p>
        </div>
    </div>
);

export default Banner;
