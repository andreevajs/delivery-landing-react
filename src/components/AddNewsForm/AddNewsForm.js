import React, { Component } from "react";

import "./newsform.less";
import ImgIcon from '../../resources/img/img-icon.svg';
import CloseIcon from '../../resources/img/close.svg';

import TextEdit from "../TextEdit/TextEdit";

class AddNewsForm extends Component {
    constructor(props) {
        super(props);
        this.fileInput = document.createElement("input");
        this.fileInput.type = "file";
        this.fileInput.oninput = () => this.onFilesSelected(this.fileInput.files);
        this.state = {
            file: null
        };
    }

    render() {
        return (
            <div className="news-form">
                <div className="news-form__title">Добавить новость</div>
                <div className="news-form__subtitle">Введите текст новости, а также приложите изображение (размер: 270х270px, формат JPG,PNG)</div>
                <div className="news-form__content">
                    <TextEdit symbolsLimit={10}/>
                    <div className="news-form__image-form">
                        <button className="image-form__add-button" onClick={(e) => this.onAddImageClick(e)}>
                            <ImgIcon className="image-form__add-button-img"/>
                            <p>+ Добавить изображение</p>
                        </button>
                        {(this.state.file != null) && ((this.state.file.isValid)
                            ? <div className="file-preview">
                                <img className="file-preview__image" src={this.state.file.src}/>
                                <p className="file-preview__filename">{this.state.file.name}</p>
                                <CloseIcon className="close-icon" onClick={() => this.removeFile()}/>
                              </div>
                            : <div className="file-preview__message-invalid">Неверный формат изображения</div>
                        )}
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

    onAddImageClick(e) {
        this.fileInput.click();        
    }

    onFilesSelected(files) {
        if (files.length == 0) {
            this.setState({file: null});
            return;
        }

        let filename = files[0].name;
        if(!filename.endsWith(".png") && !filename.endsWith(".jpg")) {
            this.setState({file: {isValid: false}});
            return;
        }

        var reader = new FileReader();
        reader.onload = () =>
            this.setState({
                file: { 
                    isValid: true,
                    name: filename,
                    src: reader.result
                }
            });
        reader.readAsDataURL(files[0]);
        console.log(files);
    }

    removeFile() {
        this.setState({file: null});
    }
}

export default AddNewsForm;