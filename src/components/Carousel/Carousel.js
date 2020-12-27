import React, { Component } from "react";

import "./carousel.less";

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.slides = props.slides;
        this.leftSlide = 0;
        this.rightSlide = Math.max(1, this.slides.length);

        this.state = {
            activeSlide: 0,
            shift: 0
        };
    }

    render() {
        let bullets = [];

        for(let i = 0; i < this.slides.length; i++) {
            if (i != this.state.activeSlide) {
                bullets.push(
                    <span className="bullet" onClick={() => this.onBulletClick(i)}>
                        <div className="bullet__center"></div>
                    </span>
                );
            } else {
                bullets.push(
                    <span className="bullet"></span>
                );
            }
        }

        return (
            <div className="carousel">
                <div className="carousel__slides">
                    <div className="carousel__slide" style={{marginLeft: this.state.shift + '%'}}>
                        {this.slides[this.leftSlide]}
                    </div>
                    <div className="carousel__slide" style={{marginLeft: 100 + this.state.shift + '%'}}>
                        {this.slides[this.rightSlide]}
                    </div>
                </div>
                <div className="carousel__swiper-bullets">
                    {bullets}
                </div>
            </div>
        );
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

    onBulletClick(index) {
        if (index > this.state.activeSlide)
            this.show(index);
        else
            this.showReversed(index);
        this.resetTimer();
    }

    resetTimer() {
        clearInterval(this.slideSwitchTimerId);
        this.slideSwitchTimerId = setInterval(
            () => this.showNext(),
            5000
        );
    }
    
    showNext() {
        if (this.state.activeSlide == this.slides.length -1)
            this.show(0);
        else
            this.show(this.state.activeSlide + 1);
    }

    show(index) {
        this.leftSlide = this.state.activeSlide;
        this.rightSlide = index;     

        this.animate(
            this.reversedPowTiming,
            (progress) => this.setState({
                activeSlide: index,
                shift:  -progress*100}),
            2000
        );
    }

    showReversed(index) {
        this.leftSlide = index;
        this.rightSlide = this.state.activeSlide;

        this.animate(
            this.reversedPowTiming,
            (progress) => this.setState({
                activeSlide: index,
                shift: (progress-1)*100}),
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
        
            draw(progress);
        
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }      
        });
    }

    reversedPowTiming(timeFraction) {
        return 1 - Math.pow(timeFraction-1, 4)
    }
}

export default Carousel;