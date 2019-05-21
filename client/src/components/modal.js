import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    //modals change return value
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
            <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                {props.actions}
                </div>
            </div>
        </div>,

        //usually go to index.html and make a new div with new id
        //target that div to place the modal
        document.querySelector('#modal')
    );

};

export default Modal;