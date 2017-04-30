import React from "react";
import theme from "../config/theme";

const SpeakerSpotlight = ( { details } ) => (
    <div className="speaker-pic">
        <style jsx>{ `
            .speaker-pic {
                display: inline-block;
                width: 25%;
                margin-bottom: 30px;
            }

            .rounded {
                border-radius: 200px;
                height: 200px;
                width: 200px;
                overflow: hidden;
                margin: auto;
                position: relative;
                cursor: pointer;
            }

            .speaker-pic img {
                width: 200px;
            }

            .rounded:hover .social {
                opacity: 1;
                transform: translateY( 0 );
            }

            .rounded:hover .overlay {
                opacity: 0.5;
            }

            .social {
                position: absolute;
                margin: auto;
                transition: all 0.2s;
                top: 45%;
                opacity: 0;
                width: 100%;
                transform: translateY( 100px );
            }

            .overlay {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                opacity: 0;
                background-color: ${ theme.primaryColor };
                transition: all 1s;
            }

            .social a {
                margin: 10px;
                border: 1px solid black;
                padding: 5px 7px;
                border-radius: 100%;
                text-decoration: none;
                color: ${ theme.secondaryColor };
            }
        ` }</style>
        <div className="rounded">
            <img src={ details.imageUrl } alt={ details.name } />
            <div className="overlay" />
            <div className="social">
                <a href={ details.twitter } target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter" />
                </a>
                <a href={ details.github } target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" />
                </a>
                <a href={ details.site } target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-link" />
                </a>
            </div>
        </div>
        <p><strong>{ details.name }</strong></p>
        <p>{ details.position }</p>
        <p>{ details.company }</p>
    </div>
);

const { shape, string } = React.PropTypes;
SpeakerSpotlight.propTypes = {
    details: shape( {
        name: string.isRequired,
        position: string.isRequired,
        company: string.isRequired,
        imageUrl: string.isRequired,
    } ).isRequired,
};

export default SpeakerSpotlight;
