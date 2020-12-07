import React, { Component } from "react";

import "./carousel.css";

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.slides = props.slides;
        
        this.bullets = [];
        for(let i = 0; i < this.slides.length; i++) {
            this.bullets.push({index: i, current: false});
        }

        this.state = {
            currentSlide: 0
        };
    }

    render() {
        return (
            <div className="carousel">
                <div className="carousel__slide">
                    {this.props.slides[this.state.currentSlide]}
                </div>
                <div className="carousel__swiper-bullets">
                    { this.bullets.map((bullet) => 
                        <span className="bullet" onClick={() => this.show(bullet.index)}>
                            {!(bullet.index == this.state.currentSlide) && <div className="bullet__center"></div>}
                        </span>)}
                </div>
                <button className="carousel__button">Заказать доставку</button>
            </div>
        );
    }

    renderBullets() {
        for(let i = 0; i < this.slides.length; i++) {
            let bullet = document.createElement("span");
            bullet.className = "bullet";
            bullet.click += () => this.show(i);
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.showNext(),
          5000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    showNext() {
        console.log("next");
        if (this.state.currentSlide == this.slides.length -1)
            this.show(0);
        else
            this.show(this.state.currentSlide + 1);
    }

    show(index) {
        this.setState({
            currentSlide: index
        });
    }
}

export default Carousel;