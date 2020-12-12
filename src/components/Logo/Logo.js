import React, { Component } from "react";

import "./logo.less";
import Icon from "../../resources/img/logo.svg";
import CompanyName from "../../resources/img/company-name.svg";

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <Icon className="logo__icon"/>
                <CompanyName className="logo__company-name"/>
            </div>
        );
    }
}

export default Logo;