import React, { Component } from "react";

import "./newsform.less";
import ImgIcon from '../../resources/img/img-icon.svg';
import TextArea from "../TextArea/TextArea";

class AddNewsForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="news-form__title">Добавить новость</div>
                <div className="news-form__subtitle">Введите текст новости, а также приложите изображение (размер: 270х270px, формат JPG,PNG)</div>
                <div className="news-form__content">
                    <TextArea symbolsLimit={500}/>
                    <div className="news-form__image-form">
                        <button className="image-form__add-button">
                            <ImgIcon className="image-form__add-button-img"/>
                            <p>+ Добавить изображение</p>
                        </button>
                    </div>
                </div>
                <button className="news-form__submit-button">Применить</button>             
            </div>
        );
    }

    onSubmitClick(e) {
        e.preventDefault();
        this.props.onSubmitClick();
    }
}

export default AddNewsForm;