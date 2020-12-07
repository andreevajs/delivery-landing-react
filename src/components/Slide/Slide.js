import React, { Component } from "react";

import "./slide.css";

class Slide extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={this.props.id} className="slide">
                <img className="slide__img" src={this.props.img}></img>
                <div className="slide__content">
                    <div className="slide__title">{this.props.title}</div>
                    <div className="slide__subtitle">{this.props.subtitle}</div>
                </div>
            </div>
        );
    }
}

export default Slide;