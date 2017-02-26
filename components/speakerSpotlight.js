import React from "react";

const SpeakerSpotlight = ( { details } ) => (
    <div className="speaker-pic">
        <div className="rounded">
            <img src={ details.imageUrl } alt={ details.name } />
        </div>
        <p>{ details.name }</p>
        <p>{ details.position } @ { details.company }</p>
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
