import React, { Component } from "react";

import "./adminpanel.less";

import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import AuthorizationModal from "../AuthorizationModal/AuthorizationModal";
import AddNewsForm from "../AddNewsForm/AddNewsForm";



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
                <div className="admin-panel__content">
                    <AddNewsForm symbolsLimit={500}/>
                </div>               
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