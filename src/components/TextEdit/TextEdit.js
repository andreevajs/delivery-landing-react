import React, { Component } from "react";

import "./textedit.less";

class TextEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayErrors: false,
            symbolsCount: 0
        }
        props.createRef(this);
    }

    render() {
        return (
            <div>
                <div className="text-edit__error-message">
                    {(this.state.displayErrors && this.isOverLimit()) ? "Превышен лимит символов" : ""}
                </div>

                <textarea 
                    className= { (this.state.displayErrors && this.isEmpty()) 
                        ? "textarea red"
                        : "textarea"}
                    placeholder="Введите текст новости"
                    onChange={(e) => this.onTextareaInput(e)}/>

                <div className="symbols-count">
                    <p>Cимволов:&nbsp; 
                    <span className= { 
                        (this.isOverLimit()) 
                            ? "text-edit__symbols-red"
                            : "symbols-count normal"}>
                    {this.state.symbolsCount}</span >
                    /{this.props.symbolsLimit}</p>
                </div>
            </div>
        );
    }

    onTextareaInput(e) {
        this.text = e.target.value;
        this.setState({
            displayErrors: false,
            symbolsCount: e.target.value.length
        });
    }

    isEmpty() {
        return this.state.symbolsCount == 0;
    }

    isOverLimit() {
        return this.state.symbolsCount > this.props.symbolsLimit
    }

    validate() {
        if (this.isEmpty()) {
            this.setState({
                displayErrors: true,
                symbolsCount: this.state.symbolsCount
            });
            return false;
        } else if (this.isOverLimit()) {
            this.setState({
                displayErrors: true,
                symbolsCount: this.state.symbolsCount
            });
            return false;
        } else {
            return true;
        }
        
    }
}

export default TextEdit;