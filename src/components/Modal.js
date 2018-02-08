import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component {

    closeModal(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        if (!this.props.isOpen)
            return null;
        return (
            <div id={this.props.id} ref="modal" className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={e => this.closeModal(e)}>&times;</span>
                    <span>Image Viewer</span>
                </div>
                <div className="modal-body">
                    <img src={this.props.imgUrl} width="95%" height="95%" alt="Preview"/>
                </div>
                <div className="modal-footer">
                </div>
            </div>
        )
    }
}

export default Modal;