import React from "react";
import Layout from "../components/layout";
import SpeakerSpotlight from "../components/speakerSpotlight";
import SponsorSpotLight from "../components/sponsorSpotlight";
import speakers from "../config/speakers";
import sponsors from "../config/sponsors";

const Home = ( ) => {
    const speakerSpotlights = speakers.map(
        ( speaker ) => <SpeakerSpotlight details={ speaker } key={ speaker.id } />,
    );

    const sponsorSpotlights = sponsors.map(
        ( sponsor ) => <SponsorSpotLight details={ sponsor } key={ sponsor.id } />,
    );

    return (
        <Layout>
            <div className="above-the-fold section dark" id="home">
                <div className="overlay" />
                <div className="centered-text">
                    <h1>Next Conf</h1>
                    <h2>23-25 July 2017</h2>
                    <p>Cluj-Napoca, Romania</p>
                </div>
            </div>
            <div className="section light">
                <div className="container">
                    <p>Curabitur vestibulum ante maximus maximus consectetur. Morbi elementum nisl nec risus varius volutpat. Sed vehicula, odio at gravida feugiat, urna lectus cursus metus, in molestie lorem purus ut risus. In ac volutpat metus, id iaculis est. Phasellus in nisi pharetra, ultricies est non, accumsan mauris. Suspendisse vel consequat quam. Aenean interdum lectus eget magna pellentesque, at posuere dui egestas. Morbi at lectus nulla. Nunc tristique, leo eget tincidunt iaculis, turpis nulla semper dolor, a molestie justo lacus id nulla.</p>

                    <p>Fusce dignissim quam aliquam orci bibendum dignissim. Nunc vehicula ante non diam consequat, sed mattis nibh dictum. Proin est nisl, placerat at lectus quis, eleifend ultrices nisi. Donec ac interdum lectus, nec consectetur erat. Suspendisse eget libero at nisl consectetur viverra. Quisque sit amet mauris ac nibh rhoncus bibendum id eu sapien. Vestibulum a urna non nisl vehicula hendrerit. Vivamus id odio vel leo consequat rhoncus a in diam. Quisque rhoncus vulputate lacus ac luctus. Curabitur leo orci, mattis pellentesque augue nec, hendrerit faucibus nulla. Vestibulum a efficitur nisl.</p>
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
                <h2>Speakers</h2>
                <p>Here they are</p>
                <div>
                    { speakerSpotlights }
                    <button className="button dark">See More</button>
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

export default Home;
