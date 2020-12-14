import React, { Component } from "react";

import Logo from "../Logo/Logo";
import "./footer.less";


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <Logo/>
                    </div>  
                    <div className="footer__content">          
                        <nav className="navigation">
                            <ul>
                                <li>О компании</li>
                                <li>Вакансии</li>
                                <li>Клиенту</li>
                                <li>Франчайзинг</li>
                                <li>Доставка из Китая</li>
                                <li>Все услуги</li>
                                <li>Акции</li>
                            </ul>
                        </nav>
                        <p className="contacts">
                            manager@uexpress.ru <br/><br/>
                            115221, г. Челябинск,
                            ул. Северная, д. 29-в<br/><br/>
                            Мы работаем по 24 часа
                            5 дней в неделю
                        </p>
                    </div>  
                </div>
            </footer>
        );
    }
}

export default Footer;