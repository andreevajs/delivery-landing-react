import React, { Component } from "react";

import "./phone.css";
import PhoneIcon from "../../resources/img/phone.svg";

class Phone extends Component {
    render() {
        return (
            <div className="phone">
                <PhoneIcon className="phone__icon"/>
                <span className="phone__number">
                    8 (909) 023-12-51
                </span>
            </div>
        );
    }
}

export default Phone;