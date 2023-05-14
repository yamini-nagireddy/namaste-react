
import React from "react";
import ReactDOM from "react-dom/client";
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world from HMTL";

// const root = document.getElementById("root");
// root.appendChild(heading);


// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React!")

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    React.createElement(
        "div", 
        {id:"child"},
        [React.createElement("h1", {}, "I'm an h1 tag." ), React.createElement("h2", {}, "I'm an h2 tag." ) ]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);