import React, { Component } from "react";

import Logo from "../Logo/Logo";
import "./footer.css";


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__logo">
                        <Logo/>
                    </div>                
                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li>О компании</li>
                            <li>Вакансии</li>
                            <li>Клиенту</li>
                            <li>Франчайзинг</li>
                        </ul>
                        <ul className="navigation__list">
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
            </footer>
        );
    }
}

export default Footer;