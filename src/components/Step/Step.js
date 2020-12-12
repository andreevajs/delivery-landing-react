import React, { Component } from "react";

import "./step.less";

class Step extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="step">
                <div className="step__img">
                    <img src={this.props.icon} ></img>
                </div>
                <div className="step__title">{this.props.title}</div>
                <div className="step__subtitle">{this.props.subtitle}</div>
            </div>
        );
    }
}

export default Step;