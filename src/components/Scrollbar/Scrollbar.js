import React, { Component } from "react";

import "./scrollbar.css";

class Scrollbar extends Component {
    constructor(props) {
        super(props)
        this.height = 144;
    }

    render() {
        return (
            <div className="scrollbar__background">
                <div className="scrollbar__foreground" style={{
                    top: this.height * this.props.offset + "px",
                    height: this.height * this.props.percent +"px"
                }}></div>
            </div>
        );
    }
}

export default Scrollbar;