import React from "react";
import fetch from "isomorphic-fetch";
import Layout from "../components/layout";
import SpeakerSpotlight from "../components/speakerSpotlight";

const Speakers = ( props ) => {
    const speakerSpotlights = props.speakers.map(
        ( speaker ) => <SpeakerSpotlight details={ speaker } key={ speaker.id } />,
    );

    return (
        <Layout>
            <div className="main">
                <div className="section">
                    { speakerSpotlights }
                </div>
            </div>
        </Layout>
    );
};

Speakers.getInitialProps = async function( { req } ) {
    const baseUrl = req ? `${ req.protocol }://${ req.headers.host }` : "";
    const speakersResponse = await fetch( `${ baseUrl }/api/speakers` );
    const speakers = await speakersResponse.json();

    return {
        speakers,
    };
};

export default Speakers;
