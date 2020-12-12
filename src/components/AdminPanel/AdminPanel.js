import React, { Component } from "react";

import Content from "../Content/Content.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import AuthorizationModal from "../AuthorizationModal/AuthorizationModal";
import AddNewsForm from "../AddNewsForm/AddNewsForm";
import Slide from "../Slide/Slide";

import SlideImg1 from '../../resources/img/slide1.png';
import SlideImg2 from '../../resources/img/slide2.png';


class AdminPanel extends Component {
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
                <Header onLoginClick = {() => this.setModalVisible(true)} />
                <AddNewsForm symbolsLimit={500}/>
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

export default AdminPanel;