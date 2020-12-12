import React, { Component } from "react";

import "./textarea.less";

class TextArea extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={this.props.id} className="slide">
                <textarea className="textarea__input" placeholder="Введите текст новости" maxLength={this.props.symbolsLimit} onChange={() => this.onTextareaInput}/>
                <div className="textarea__symbols">
                    <p>символов:<span  className="textarea__symbols-count normal">{0}</span >/{this.props.symbolsLimit}</p>
                </div>
            </div>
        );
    }

    onTextareaInput() {

    }
}

export default TextArea;