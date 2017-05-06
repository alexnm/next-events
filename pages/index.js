import React from "react";
import fetch from "isomorphic-fetch";
import Link from "next/link";
import Layout from "../components/layout";
import Banner from "../components/banner";
import SpeakerSpotlight from "../components/speakerSpotlight";
import SponsorSpotLight from "../components/sponsorSpotlight";

const Home = ( props ) => {
    const speakerSpotlights = props.speakers.slice( 0, 8 ).map(
        ( speaker ) => <SpeakerSpotlight details={ speaker } key={ speaker.id } />,
    );

    const sponsorSpotlights = props.sponsors.map(
        ( sponsor ) => <SponsorSpotLight details={ sponsor } key={ sponsor.id } />,
    );

    return (
        <Layout>
            <Banner />
            <div className="section light">
                <div className="container">
                    <h2>About the event</h2>
                    <p>We’re planning for JSHeroes to be the biggest tech Conference in Romania, dedicated solely to JavaScript. We’ll get our engine going with 20 international JavaScript experts and we’ve chosen a venue that allows a crowd of up to 500 attendees.</p>

                    <p>We kick-started the Cluj JavaScripters community in August 2015. Since then we’ve grown to 900+ members and formed one of the most active knowledge sharing groups worldwide. We organized more than 42 Meetups and Trainings for the JS community in Cluj. So far we partnered with technical conferences to deliver high-quality JS knowledge and held an entire conference track for CodeCamp. What can we say, it was a full-house track and it was brilliant!</p>

                    <p>JSHeroes is one of our dreams and the high point of an active community; we’re truly engaged to see it come true. We know it’s a stretch and it might seem crazy to organize an event of this international scale. We’ve considered all the risks and each of us decided to take personal ownership for it so that our local Cluj JavaScripters community evolves into a global JSHeroes community.</p>
                </div>
            </div>
            <div className="section dark" id="about">
                <div className="container">
                    <h2>Why next?</h2>
                    <p>Mauris placerat nunc sit amet turpis pulvinar, nec iaculis massa posuere. Aenean orci tortor, aliquet sed neque eu, dictum suscipit nisi. Morbi interdum vitae nunc sit amet varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam non enim orci. Suspendisse mauris quam, porttitor vel lorem nec, malesuada suscipit velit. Duis lacinia cursus mattis. Vestibulum vel nisl vestibulum neque tincidunt fringilla at a dui. Nam nisi lacus, viverra vitae eros quis, maximus vehicula nisi. Phasellus euismod, tortor et rutrum tempus, libero risus vestibulum nisi, non malesuada eros orci quis sem. Quisque iaculis pharetra placerat. Integer ut urna sit amet dui pretium pharetra at sit amet nisl. Aliquam rutrum velit ipsum, scelerisque pretium purus ultrices nec.</p>
                    <p>Mauris placerat nunc sit amet turpis pulvinar, nec iaculis massa posuere. Aenean orci tortor, aliquet sed neque eu, dictum suscipit nisi. Morbi interdum vitae nunc sit amet varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam non enim orci. Suspendisse mauris quam, porttitor vel lorem nec, malesuada suscipit velit. Duis lacinia cursus mattis. Vestibulum vel nisl vestibulum neque tincidunt fringilla at a dui. Nam nisi lacus, viverra vitae eros quis, maximus vehicula nisi. Phasellus euismod, tortor et rutrum tempus, libero risus vestibulum nisi, non malesuada eros orci quis sem. Quisque iaculis pharetra placerat. Integer ut urna sit amet dui pretium pharetra at sit amet nisl. Aliquam rutrum velit ipsum, scelerisque pretium purus ultrices nec.</p>
                    <button className="button light">Register Now</button>
                </div>
            </div>
            <div className="section color" id="speakers">
                <h2>Our Heroes</h2>
                <div>
                    { speakerSpotlights }
                    <Link href="/speakers">
                        <button className="button dark">See More</button>
                    </Link>
                </div>
            </div>
            <div className="section light" id="agenda">
                <div className="container">
                    <h2>Agenda</h2>
                    <p>Curabitur vestibulum ante maximus maximus consectetur. Morbi elementum nisl nec risus varius volutpat. Sed vehicula, odio at gravida feugiat, urna lectus cursus metus, in molestie lorem purus ut risus. In ac volutpat metus, id iaculis est. Phasellus in nisi pharetra, ultricies est non, accumsan mauris. Suspendisse vel consequat quam. Aenean interdum lectus eget magna pellentesque, at posuere dui egestas. Morbi at lectus nulla. Nunc tristique, leo eget tincidunt iaculis, turpis nulla semper dolor, a molestie justo lacus id nulla.</p>

                    <p>Fusce dignissim quam aliquam orci bibendum dignissim. Nunc vehicula ante non diam consequat, sed mattis nibh dictum. Proin est nisl, placerat at lectus quis, eleifend ultrices nisi. Donec ac interdum lectus, nec consectetur erat. Suspendisse eget libero at nisl consectetur viverra. Quisque sit amet mauris ac nibh rhoncus bibendum id eu sapien. Vestibulum a urna non nisl vehicula hendrerit. Vivamus id odio vel leo consequat rhoncus a in diam. Quisque rhoncus vulputate lacus ac luctus. Curabitur leo orci, mattis pellentesque augue nec, hendrerit faucibus nulla. Vestibulum a efficitur nisl.</p>
                </div>
            </div>
            <div className="section dark" id="sponsors">
                <div className="container">
                    <h2>Sponsors</h2>
                    <p>Curabitur vestibulum ante maximus maximus consectetur. Morbi elementum nisl nec risus varius volutpat. Sed vehicula, odio at gravida feugiat, urna lectus cursus metus, in molestie lorem purus ut risus. In ac volutpat metus, id iaculis est. Phasellus in nisi pharetra, ultricies est non, accumsan mauris. Suspendisse vel consequat quam. Aenean interdum lectus eget magna pellentesque, at posuere dui egestas. Morbi at lectus nulla. Nunc tristique, leo eget tincidunt iaculis, turpis nulla semper dolor, a molestie justo lacus id nulla.</p>

                    <p>Fusce dignissim quam aliquam orci bibendum dignissim. Nunc vehicula ante non diam consequat, sed mattis nibh dictum. Proin est nisl, placerat at lectus quis, eleifend ultrices nisi. Donec ac interdum lectus, nec consectetur erat. Suspendisse eget libero at nisl consectetur viverra. Quisque sit amet mauris ac nibh rhoncus bibendum id eu sapien. Vestibulum a urna non nisl vehicula hendrerit. Vivamus id odio vel leo consequat rhoncus a in diam. Quisque rhoncus vulputate lacus ac luctus. Curabitur leo orci, mattis pellentesque augue nec, hendrerit faucibus nulla. Vestibulum a efficitur nisl.</p>
                </div>
                { sponsorSpotlights }
            </div>
            <div className="section color">
                <div className="container">
                    <p>Join us in Cluj-Napoca in July</p>
                </div>
            </div>
        </Layout>
    );
};

Home.getInitialProps = async function( { req } ) {
    const baseUrl = req ? `${ req.protocol }://${ req.headers.host }` : "";
    const speakersResponse = await fetch( `${ baseUrl }/api/speakers` );
    const speakers = await speakersResponse.json();

    const sponsorsResponse = await fetch( `${ baseUrl }/api/sponsors` );
    const sponsors = await sponsorsResponse.json();

    return {
        speakers,
        sponsors,
    };
};

Home.propTypes = {
    speakers: React.PropTypes.array,
    sponsors: React.PropTypes.array,
};

export default Home;
