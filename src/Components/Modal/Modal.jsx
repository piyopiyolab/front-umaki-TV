import './Modal.scss';
import { useEffect } from 'react';


function Modal({ closeModal, searchResults }) {

    useEffect(() => {

        console.log('Modal Appear :', searchResults)

    }, [searchResults])

    return (
        <div
            onClick={closeModal}
            className='modal'>

            <h1>Résultat de la recherche pour : {searchResults && searchResults.query}</h1>
            <ul>

            </ul>
        </div>
    )
}
export default Modal