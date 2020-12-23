import React, { Component } from "react";

import "./carousel.less";

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
                <div className="carousel__slides">
                    <div className="carousel__slide" style={{marginLeft: this.state.shift + '%'}}>
                        {this.props.slides[this.state.previousSlide]}
                    </div>
                    <div className="carousel__slide" style={{marginLeft: (100 + this.state.shift) + '%'}}>
                        {this.props.slides[this.state.currentSlide]}
                    </div>
                </div>
                <div className="carousel__swiper-bullets">
                    { this.bullets.map((bullet) => 
                        <span className="bullet" onClick={() => this.onBulletClick(bullet.index)}>
                            {!(bullet.index == this.state.currentSlide) && <div className="bullet__center"></div>}
                        </span>)}
                </div>
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

    onBulletClick(index) {
        this.show(index);
        this.resetTimer();
    }

    componentDidMount() {
        this.slideSwitchTimerId = setInterval(
          () => this.showNext(),
          5000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.slideSwitchTimerId);
    }

    resetTimer() {
        clearInterval(this.slideSwitchTimerId);
        this.slideSwitchTimerId = setInterval(
            () => this.showNext(),
            5000
        );
    }
    
    showNext() {
        console.log("next");
        if (this.state.currentSlide == this.slides.length -1)
            this.show(0);
        else
            this.show(this.state.currentSlide + 1);
    }

    show(index) {
        let previousIndex = this.state.currentSlide;
        this.animate(
            this.reversedPowTiming,
            (progress) => this.setState({
                previousSlide: previousIndex,
                currentSlide: index,
                shift: -progress*100}),
            2000
        );
    }

    animate(timing, draw, duration) {
        let start = performance.now();
      
        requestAnimationFrame(function animate(time) {
          // timeFraction изменяется от 0 до 1
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
      
          // вычисление текущего состояния анимации
          let progress = timing(timeFraction);
      
          draw(progress); // отрисовать её
      
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }      
        });
    }

    linearTiming(timeFraction) {
        return timeFraction;
    }

    quad(timeFraction) {
        return Math.pow(timeFraction, 4)
    }

    reversedPowTiming(timeFraction) {
        return 1 - Math.pow(timeFraction-1, 4)
    }
}

export default Carousel;