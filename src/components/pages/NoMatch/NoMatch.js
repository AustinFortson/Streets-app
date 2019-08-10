import React from "react";
import './NoMatch.css'


export default class NoMatch extends React.Component {
    render() {
        return (
            <div>
                <div className="noMatchBackground"/>
                <p id="noMatchHeader"> 404 Not Found </p>
            </div>
        );
    }
}

