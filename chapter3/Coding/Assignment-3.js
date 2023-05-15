import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpeg";
import user from "./usericon.png";
import "./Assignment-3.css";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title"
// const header = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", {}, "I'm a h1 tag"),
//   React.createElement("h2", {}, "I'm a h2 tag"),
//   React.createElement("h3", {}, "I'm a h3 tag")
// ]);


// Create the same element using JSX
const header = (
    <div className="title">
        <h1>I'm a h1 tag from JSX</h1>
        <h2>I'm a h2 tag from JSX</h2>
        <h3>I'm a h3 tag from JSX</h3>
    </div>
);

// Create a functional component of the same with JSX
// const Header = () => {
//     return (
//         <div className="title">
//             <h1>I'm a h1 tag from JSX function</h1>
//             <h2>I'm a h2 tag from JSX function</h2>
//             <h3>I'm a h3 tag from JSX function</h3>
//         </div>
//     );

// }

// Pass the attributes into the tag in JSX
// const Header = () => {
//     return (
//         <div className="title">
//             <h1 className="heading1">I'm a h1 tag from JSX function</h1>
//             <h2 className="heading2">I'm a h2 tag from JSX function</h2>
//             <h3 className="heading3">I'm a h3 tag from JSX function</h3>
//         </div>
//     );

// }

// Composition of Component (Add a component inside another)

// const SubHeading = () => (<h2>Another Functional Component</h2>);
// const Header = () => {
//     return (
//         <div className="title">
//             <h1 className="heading1">I'm a h1 tag from JSX function</h1>
//             <h2 className="heading2">I'm a h2 tag from JSX function</h2>
//             <h3 className="heading3">I'm a h3 tag from JSX function</h3>
//             <SubHeading/>
//         </div>
//     );

// };

// {TitleComponent} vs <TitleComponent/> vs <TitleComponent><TitleComponent/> in JSX

// const TitleComponent = () => <h1>Title Component</h1>;

// const Header = () => {
//     return (
//         <div className="title">
//             {TitleComponent()}
//             <TitleComponent/>
//             <TitleComponent></TitleComponent>
//         </div>
//     );
// };

const HeaderComponent = () => {
    return (
        <div className="headercontainer">
            <div className="left">
                <img src={logo}/>
            </div>
            <div className="middle">
                <input type="text" placeholder="search..."/>
                <button>Submit</button>
            </div>
            <div className="right">
                <img src={user}/>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);