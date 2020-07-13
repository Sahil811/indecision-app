import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
   <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handlerClearStateOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        ariaHideApp={ false }
        className="modal"
        >
       <h3 className="modal__title">Selected Option</h3>
       {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
       <button className="button" onClick={props.handlerClearStateOption}>Okay</button>
   </Modal>
)

export default OptionModal;