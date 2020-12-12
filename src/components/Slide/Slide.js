import React, { Component } from "react";

import "./slide.less";

class Slide extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={this.props.id} className="slide">
                <div className="slide__content">
                    <div className="slide__title">{this.props.title}</div>
                    <div className="slide__subtitle">{this.props.subtitle}</div>
                    <button className="slide__button">Заказать доставку</button>
                </div>
                <div className="slide__img-wrapper">
                    <img className="slide__img" src={this.props.img}></img> 
                </div>                             
            </div>
        );
    }
}

export default Slide;