import React, { Component } from "react";

import "./content.css"
import Step from "../Step/Step"
import Icon1 from "../../resources/img/ico1.png";
import Icon2 from "../../resources/img/ico2.png";
import Icon3 from "../../resources/img/ico3.png";
import Icon4 from "../../resources/img/ico4.png";
import Icon5 from "../../resources/img/ico5.png";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="content__title">
                    5 шагов к заявке
                </div>
                <div className="steps">
                    <Step
                        icon={Icon1}
                        title="Распечатать стоимость"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."/>
                    <Step
                        icon={Icon2}
                        title="Вызвать курьера"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."/>
                    <Step
                        icon={Icon3}
                        title="Оплатить услуги"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."/>
                    <Step
                        icon={Icon4}
                        title="Заключить договор"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."/>
                    <Step
                        icon={Icon5}
                        title="Предоставить данные"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."/>
                </div>
            </div>
        );
    }
}

export default Content;