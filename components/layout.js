import React from "react";
import Link from "next/link";
import Head from "next/head";

const Layout = ( { children, title = "Next Conf" } ) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" />
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400" rel="stylesheet" />
            <link href="/static/styles/main.css" rel="stylesheet" />
        </Head>
        <header className="header section dark">
            <nav>
                <a href="#home" className="navlink">Next Conf</a>
                <a href="#about" className="navlink">About</a>
                <a href="#speakers" className="navlink">Speakers</a>
                <a href="#agenda" className="navlink">Agenda</a>
                <a href="#sponsors" className="navlink">Sponsors</a>
                <a href="/" className="navlink highlight">Register</a>
                <a href="/" className="navlink">Contact</a>
            </nav>
        </header>

        { children }

        <footer className="section dark">
            <p>Copyright © 2017</p>
            <p>Build with ❤ by the community</p>
        </footer>
    </div>
);

const { string, any } = React.PropTypes;
Layout.propTypes = {
    title: string.isRequired,
    children: any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Layout;
