import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import "./reset.css";
import "./fonts.css";
import "./styles.less";

import Main from "./components/Main/Main";
import AdminPanel from "./components/AdminPanel/AdminPanel";

ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={Main}/>
        <Route path="/admin" component={AdminPanel}/>
        </div>        
    </Router>,
    document.getElementById("root")
);