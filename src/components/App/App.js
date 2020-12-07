import React, { Component } from "react";

import "./reset.css";
import "./app.css";
import Content from "../Content/Content.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import AuthorizationModal from "../AuthorizationModal/AuthorizationModal";

class App extends Component {
    constructor(props) {
        super(props);
        this.page = <Content/>
        this.state = {
            modalOpened: false,
            page: this.page
        }
    }

    render() {
        return (
            <div>
                {this.state.modalOpened && 
                <AuthorizationModal 
                    onSubmitClick={() => this.openAdminPage()}
                    onCloseClick={() => this.setModalVisible(false)}/>}
                <Header onLoginClick = {() => this.setModalVisible(true)} />
                {this.state.page}
                <Footer />
            </div>
        );
    }

    setModalVisible(isVisible) {
        this.setState({
            modalOpened: isVisible,
            page: this.page
        });
    }

    openAdminPage() {
        this.page = <div>Admin</div>
        this.setModalVisible(false);
    }
}

export default App;