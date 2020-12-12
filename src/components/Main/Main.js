import React, { Component } from "react";

import Content from "../Content/Content.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import AuthorizationModal from "../AuthorizationModal/AuthorizationModal";
import Carousel from "../Carousel/Carousel";
import Slide from "../Slide/Slide";

import SlideImg1 from '../../resources/img/slide1.png';
import SlideImg2 from '../../resources/img/slide2.png';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpened: false
        }
    }

    render() {
        return (
            
            <div>
                {this.state.modalOpened && 
                <AuthorizationModal onCloseClick={() => this.setModalVisible(false)}/>}
                <Header 
                    content = {
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
                    }
                    onLoginClick = {() => this.setModalVisible(true)} />
                <Content />
                <Footer />
            </div>
        );
    }

    setModalVisible(isVisible) {
        this.setState({
            modalOpened: isVisible
        });
    }
}

export default Main;