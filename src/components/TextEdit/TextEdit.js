import React, { Component } from "react";

import "./textedit.less";

class TextEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            symbolsCount: 0
        }
    }

    render() {
        return (
            <div>
                <textarea placeholder="Введите текст новости" onChange={(e) => this.onTextareaInput(e)}/>
                <div className="symbols-count">
                    <p>символов:
                    <span className= { 
                        (this.state.symbolsCount > this.props.symbolsLimit) 
                            ? "text-warning"
                            : "symbols-count normal"}>
                    {this.state.symbolsCount}</span >
                    /{this.props.symbolsLimit}</p>
                </div>
            </div>
        );
    }

    onTextareaInput(e) {
        this.setState({
            symbolsCount: e.target.value.length
        })
    }
}

export default TextEdit;