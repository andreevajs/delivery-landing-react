import React, { Component } from "react";

import "./imageinput.less";

import ImgIcon from '../../resources/img/img-icon.svg';
import CloseIcon from '../../resources/img/close.svg';

class ImageInput extends Component {
    constructor(props) {
        super(props)

        this.fileInput = document.createElement("input");
        this.fileInput.type = "file";
        this.fileInput.accept = "image/*";
        this.fileInput.oninput = () => this.onFilesSelected(this.fileInput.files);

        this.file = null;

        this.state = {
            file: null,
            error: null
        };

        props.createRef(this);
    }

    render() {
        return (
            <div className="image-input">
                <div className="add-image-button" onClick={() => this.fileInput.click()}>
                    <ImgIcon className="add-image-button__img"/>
                    <p>+ Добавить изображение</p>
                </div>
                {(this.state.file != null && this.state.file.isValid && this.state.error == null)
                    ? <div className="file-preview">
                        <img className="file-preview__image" src={this.state.file.src}/>
                        <p className="file-preview__filename">{this.state.file.name}</p>
                        <CloseIcon className="close-icon" onClick={() => this.removeFile()}/>
                        </div>
                    : <div className="image-input__error-message">{this.state.error}</div>
                }
            </div>
        );
    }

    onFilesSelected(files) {
        if (files.length == 0) {
            this.removeFile();
            return;
        }

        if (files[0].type != "image/png" && files[0].type != "image/jpeg") {
            this.setState({
                file: {
                    isValid: false
                },
                error: "Неверный формат изображения"
            });
            return;
        }

        let reader = new FileReader();
        reader.onload = () => {
            let img = new Image;
            img.onload = () => {
              if (img.height != this.props.height || img.width != this.props.width) {
                this.setState({
                    file: {
                        isValid: false
                    },
                    error: "Неверный размер изображения"
                });
              } else {
                this.file = {
                    name: files[0].name,
                    src: reader.result
                };
                this.setState({
                    file: { 
                        isValid: true,
                        name: this.file.name,
                        src: this.file.src
                    },
                    error: null
                });
              }
            };
            img.src = reader.result;            
        }            
        reader.readAsDataURL(files[0]);
    }

    removeFile() {
        this.file = null;
        this.setState({file: null});
    }

    validate() {
        return this.state.file == null || this.state.file.isValid;
    }

}

export default ImageInput;