const express = require( "express" );
const next = require( "next" );
const speakers = require( "./data/speakers" );
const sponsors = require( "./data/sponsors" );

const dev = process.env.NODE_ENV !== "production";
const app = next( { dev } );
const handle = app.getRequestHandler();

app.prepare()
.then( () => {
    const server = express();
    server.get( "/api/speakers", ( req, res ) => {
        res.json( speakers );
    } );

    server.get( "/api/sponsors", ( req, res ) => {
        res.json( sponsors );
    } );

    server.get( "*", ( req, res ) => handle( req, res ) );

    server.listen( 3000, ( err ) => {
        if ( err ) throw err;
        console.log( "> Ready on http://localhost:3000" );
    } );
} )
.catch( ( ex ) => {
    console.error( ex.stack );
    process.exit( 1 );
} );
