import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

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
                <Link href="/"><a className="navlink">Next Conf</a></Link>
                <Link href="/about"><a className="navlink">About</a></Link>
                <Link prefetch href="/speakers"><a className="navlink">Speakers</a></Link>
                <Link href="/agenda"><a className="navlink">Agenda</a></Link>
                <Link href="/sponsors-and-partners">
                    <a
                        className="navlink"
                        onMouseEnter={ ( ) => Router.prefetch( "/sponsors-and-partners" ) }
                    >Sponsors and Partners</a>
                </Link>
                <Link href="/"><a className="navlink highlight">Register</a></Link>
                <Link href="/"><a className="navlink">Contact</a></Link>
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
    title: string, // eslint-disable-line react/require-default-props
    children: any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Layout;
