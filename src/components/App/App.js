import React, { Component } from "react";

import "./reset.css";
import "./app.css";
import Content from "../Content/Content.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;