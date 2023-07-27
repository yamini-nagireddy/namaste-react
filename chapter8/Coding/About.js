import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    render(){
        return (
            <div>
                <h2>About Us Page</h2>
                <UserClass name={"John Doe (class)"} location={"United States (class)"}/>
            </div>
        );
    }
}



export default About;