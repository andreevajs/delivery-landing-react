import React, { Component } from "react";

import './header.css'

import Carousel from "../Carousel/Carousel";
import Logo from "../Logo/Logo";
import AuthorizationModal from "../AuthorizationModal/AuthorizationModal";
import Phone from "../Phone/Phone";
import Slide from "../Slide/Slide";

import SlideImg1 from '../../resources/img/slide1.png';
import SlideImg2 from '../../resources/img/slide2.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.modal = new AuthorizationModal();
    }

    render() {
        return (
            <header className="header">
                {this.modal.render()}   
                <div className="header__content">
                    <div className="header__navigation">
                        <div className="header__logo">
                            <Logo />                            
                            <div className="separation-line"/>
                            <span className="tagline">
                                Курьерская служба доставки
                            </span>
                        </div>
                        <div className="header__right-block">
                            <div className="header__phone">
                                <Phone />
                            </div>                        
                            <button className="button-login" onClick={() => this.modal.open()}>
                                Вход
                            </button> 
                        </div>     
                    </div>
                    <Carousel slides={[
                        <Slide 
                            id="slide-1"
                            title="Подписание договора за 1 час"
                            subtitle="В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг."
                            img={SlideImg1}/>,
                        <Slide
                            id="slide-2"
                            title="Срочная доставка день в день"
                            subtitle="Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений."
                            img={SlideImg2}/>,
                    ]}/>        
                </div>
            </header>
        );
    }
}

export default Header;