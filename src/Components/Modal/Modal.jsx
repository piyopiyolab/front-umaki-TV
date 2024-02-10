import './Modal.scss';
import { useEffect } from 'react';


function Modal({ closeModal, title, content, confirm }) {

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className='modal-bg'>

            <div className='modal-content'
                onClick={stopPropagation}>
                <h1>{title}</h1>
                <p>{content}</p>

                <div className='modal-content__controls'>
                    <button onClick={confirm}>Yes I confirm</button>
                    <button onClick={closeModal}>No, I cancel</button>
                </div>
            </div>

        </div>
    )
}
export default Modal


