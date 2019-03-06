import React, { Component } from "react";
import Order from "./Order";

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>React Beginners</p>
                <Order />
            </div>
        );
    }
}

export default App;
