import React from "react";

const SponsorSpotlight = ( { details } ) => (
    <div className="sponsor-logo">
        <a target="_blank" rel="noopener noreferrer" href={ details.linkUrl }>
            <img src={ details.logoUrl } alt={ details.name } />
        </a>
    </div>
);

const { shape, string } = React.PropTypes;
SponsorSpotlight.propTypes = {
    details: shape( {
        name: string.isRequired,
        logoUrl: string.isRequired,
        linkUrl: string.isRequired,
    } ).isRequired,
};

export default SponsorSpotlight;
