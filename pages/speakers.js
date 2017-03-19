import React from "react";
import Layout from "../components/layout";
import SpeakerSpotlight from "../components/speakerSpotlight";
import speakers from "../config/speakers";

const Speakers = ( ) => {
    const speakerSpotlights = speakers.map(
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

export default Speakers;
