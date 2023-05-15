import React from "react";
import ReactDOM from "react-dom/client";
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world from HMTL";

// const root = document.getElementById("root");
// root.appendChild(heading);

//React.createElement => Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);
console.log(heading);

//JSX - HTML/XML like syntax
//JSX is transpiled before it goes to JS engine - PARCEL - Babel
//JSX => Babel transpiles it to React.CreateElement => JS object=> HTMLElement(render)

const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    Hello world using JSX
  </h1>
);

// React Functional Component
const HeadingComponent = () => (
    <div className="heading1">
        <h1>Hello World Functional Component!</h1>
    </div>
);
//Component Composition
//React Fragment - behaves like an empty tag
const HeadingComponent2 = () => {
    return (
        <React.Fragment>
            <div id="container">
                {jsxHeading}
                <h2>{100+500}</h2>
                {HeadingComponent()}
                <HeadingComponent/>
                <HeadingComponent></HeadingComponent>
                <h1>Hello World Functional component 2!</h1>
            </div>
            <div id="container2">Another container</div>
        </React.Fragment>
    );
};

// const HeadingComponent2 = () => {
//     return (
//         <>
//             <div id="container">
//                 {jsxHeading}
//                 <h2>{100+500}</h2>
//                 {HeadingComponent()}
//                 <HeadingComponent/>
//                 <HeadingComponent></HeadingComponent>
//                 <h1>Hello World Functional component 2!</h1>
//             </div>
//             <div id="container2">Another container</div>
//         </>
//     )
// }

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);
