import React, { Component } from "react";

import "./modal.css";
import "./authorization.css";
import CloseIcon from '../../resources/img/close.svg';

class AuthorizationModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    render() {
        return (
            <div>
                {this.state.show &&
                <div className="modal">
                    <div className="modal__content">
                        <CloseIcon className="modal__close-icon" onClick={() => this.setVisible(false)}/>
                        <form className="authorization-form">
                            <div className="authorization-form__title">
                                Авторизация
                            </div>       
                            <div className="authorization-form__subtitle">
                                Введите логин и пароль, чтобы войти в личный кабинет
                            </div> 
                            <input className="authorization-form__input" type="text" placeholder="Логин"/>
                            <input className="authorization-form__input" type="password" placeholder="Пароль"/>
                            <input className="authorization-form__submit-button" type="submit" value="Войти"/>
                        </form>  
                    </div>                
                </div>}
            </div>
        );
    }

    setVisible(bool) {
        this.setState({
            show: bool
        });   
    }

    open() {
        this.setVisible(true);      
    }

    close() {
        this.setState(false);
    }
}

export default AuthorizationModal;