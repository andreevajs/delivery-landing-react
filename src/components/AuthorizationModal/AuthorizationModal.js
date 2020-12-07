import React, { Component } from "react";

import "./modal.css";
import "./authorization.css";
import CloseIcon from '../../resources/img/close.svg';

class AuthorizationModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="modal">
                    <div className="modal__content">
                        <CloseIcon className="modal__close-icon" onClick={() => this.props.onCloseClick()}/>
                        <form className="authorization-form">
                            <div className="authorization-form__title">
                                Авторизация
                            </div>       
                            <div className="authorization-form__subtitle">
                                Введите логин и пароль, чтобы войти в личный кабинет
                            </div> 
                            <input className="authorization-form__input" type="text" placeholder="Логин"/>
                            <input className="authorization-form__input" type="password" placeholder="Пароль"/>
                            <input className="authorization-form__submit-button" type="submit" value="Войти" onClick={(e) => this.onSubmitClick(e)}/>
                        </form>  
                    </div>                
                </div>
            </div>
        );
    }

    onSubmitClick(e) {
        e.preventDefault();
        this.props.onSubmitClick();
    }
}

export default AuthorizationModal;