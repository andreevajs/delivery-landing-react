import React, { Component } from "react";

import "./newsform.less";

import TextEdit from "../TextEdit/TextEdit";
import ImageInput from "../ImageInput/ImageInput";

class AddNewsForm extends Component {
    render() {
        return (
            <div className="news-form">
                <div className="news-form__title">Добавить новость</div>
                <div className="news-form__subtitle">Введите текст новости, а также приложите изображение (размер: 270х270px, формат JPG,PNG)</div>
                <div className="news-form__content">
                    <TextEdit
                        symbolsLimit={10}
                        createRef={ref => this.textEdit = ref}/>
                    <div className="news-form__image-input">
                        <ImageInput 
                            width={270} 
                            height={270}
                            createRef={ref => this.imageInput = ref}/>
                    </div>                    
                </div>
                <button className="news-form__submit-button" onClick={(e) => this.onSubmitClick(e)}>Применить</button>             
            </div>
        );
    }

    onSubmitClick(e) {
        e.preventDefault();
        if(this.textEdit.validate() && this.imageInput.validate()) {
            console.log("текст новости: " + this.textEdit.text);
            if (this.imageInput.file == null)
                console.log("изображение: нет");
            else
                console.log("изображение: " + this.imageInput.file.name + " (" + this.imageInput.file.src.length + " B)");
        }
    }
}

export default AddNewsForm;