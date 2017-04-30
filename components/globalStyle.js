import React from "react";

export default ( ) => (
    <style jsx global>{ `
        .button {
            margin: 20px;
            border-style: solid;
            border-width: 3px;
            padding: 10px 30px;
            font-size: 1.5rem;
            transition: all 0.35s ease-in-out;
            cursor: pointer;
        }

        .button.light {
            background-color: transparent;
            color: #eee;
            border-color: #eee;
        }

        .button.light:hover {
            background-color: #f1c40f;
            color: #333;
            border-color: #f1c40f;
        }

        .button.dark {
            background-color: transparent;
            color: #333;
            border-color: #333;
        }

        .button.dark:hover {
            background-color: #333;
            color: #eee;
            border-color: #333;
        }

        .container {
            width: 1024px;
            margin: auto;
        }

        .header {
            position: fixed;
            width: 100%;
            z-index: 10;
        }

        .main {
            padding-top: 59px;
        }

        .section {
            padding: 20px;
        }

        .section.dark {
            background-color: #333;
            color: #eee;
        }

        .section.color {
            background-color: #f1c40f;
            color: #333;
        }

        .section.light {
            background-color: #eee;
            color: #333;
        }

        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            text-align: center;
        }

        h1, h2, h3, h4 {
            margin: 0;
        }

        p {
            font-weight: 300;
            font-size: 1.2rem;
        }
    ` }</style>
);
