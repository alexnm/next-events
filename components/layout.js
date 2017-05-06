import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import GlobalStyle from "./globalStyle";

const PrefetchOnMouseEnter = ( { href, title, className } ) => (
    <Link href={ href }>
        <a
            className={ className }
            onMouseEnter={ ( ) => Router.prefetch( href ) }
        >{ title }</a>
    </Link>
);

PrefetchOnMouseEnter.propTypes = {
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    className: React.PropTypes.string,
};

const Layout = ( { children, title = "JSHeroes" } ) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" />
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <header className="header section dark">
            <nav>
                <Link href="/"><a className="navlink">JSHeroes</a></Link>
                <PrefetchOnMouseEnter className="navlink" href="/about" title="About" />
                <Link prefetch href="/speakers"><a className="navlink">Speakers</a></Link>
                <PrefetchOnMouseEnter className="navlink" href="/agenda" title="Agenda" />
                <PrefetchOnMouseEnter className="navlink" href="/sponsors-and-partners" title="Sponsors and Partners" />
                <Link href="/"><a className="navlink highlight">Register</a></Link>
                <Link href="/"><a className="navlink">Contact</a></Link>
            </nav>
            <GlobalStyle />
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
