import React, { Component } from "react";

import "./scrollbar.css";

class Scrollbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            top: 0,
            height: 100,
            bottom: 100
        }
    }

    render() {
        if (this.state.height < this.state.bottom)
        return (
            <div className="scrollbar__background">
                <div className="scrollbar__foreground" 
                    onMouseDown={(e) => this.onScrollMouseDown(e)}
                    style={{
                        top: (144 * this.state.top / this.state.bottom)  + "px",
                        height: (144 * this.state.height / this.state.bottom) +"px"
                    }}>
                </div>
            </div>
        );
        else
        return "";
    }

    componentDidMount() {
        this.target = this.props.targetRef.current;
        console.log(this.target);
        this.target.onscroll = (e) => this.scroll(e);
    }

    scroll(e) {
        this.setState({
            top: e.target.scrollTop,
            height: e.target.offsetHeight,
            bottom: e.target.scrollHeight
        })
    }

    onScrollMouseDown(e) {
        e.preventDefault();
        this.mouseY = e.clientY;
        document.onmousemove = (e) => this.drag(e);
        document.onmouseup = (e) => this.resetMouseEvents(e);        
    }
    
    drag(e) {
        e.preventDefault();
        let dY = this.mouseY - e.clientY;
        this.mouseY = e.clientY;

        let newTop = this.cut(this.state.top - dY * (this.state.bottom / this.state.height), 0, this.state.bottom - this.state.height);
        this.target.scrollTop = newTop;
    }

    resetMouseEvents() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    cut(value, min, max) {
        if (value < min)
            return min;
        else if (value > max)
            return max;
        else
            return value;
    }
}

export default Scrollbar;