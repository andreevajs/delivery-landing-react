import React, { Component } from "react";

import './header.less'

import Logo from "../Logo/Logo";
import Phone from "../Phone/Phone";


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">  
                <div className="header__content">
                    <div className="header__navigation">
                        <div className="header__logo">
                            <Logo />                            
                            <div className="separation-line"/>
                            <div className="tagline">
                                Курьерская служба доставки
                            </div>
                        </div>
                        <div className="header__right-block">
                            <div className="header__phone">
                                <Phone />
                            </div>                        
                            <button className="button-login" onClick={this.props.onLoginClick}>
                                Вход
                            </button> 
                        </div>     
                    </div>
                    {this.props.content}      
                </div>
            </header>
        );
    }
}

export default Header;