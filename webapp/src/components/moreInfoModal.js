import * as React from 'react';

import { moreInfoModalContainer, closeButtonStyled, imgModalStyled } from './moreInfoModal.style';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faXmark, faToggleOn, faToggleOff, faPersonDress, faPerson } from '@fortawesome/free-solid-svg-icons';

export default function MoreInfoModal(props) {
    const { selectedItem, setShowModal, showModal } = props;

    if(showModal) {
        console.log(selectedItem);
        return(
            <div style={moreInfoModalContainer}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1 style={{fontFamily: 'Fredoka, sans-serif'}}>{selectedItem.name}</h1>
                    <button style={closeButtonStyled} onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div style={{display: 'flex'}}>
                    <img alt={selectedItem.name}  style={imgModalStyled} src={selectedItem.image} />
                    <div>
                        <p style={{fontFamily: 'Fredoka, sans-serif'}}>Status: {selectedItem.status === 'Alive' ? (<FontAwesomeIcon icon={faToggleOn} />) :  (<FontAwesomeIcon icon={faToggleOff} />)}</p>
                        <p style={{fontFamily: 'Fredoka, sans-serif'}}>Specie: {selectedItem.species}</p>
                        <p style={{fontFamily: 'Fredoka, sans-serif'}}>Gender: {selectedItem.gender === 'Female' ? (<FontAwesomeIcon icon={faPersonDress} />) :  (<FontAwesomeIcon icon={faPerson} />)}</p>
                        <p style={{fontFamily: 'Fredoka, sans-serif'}}>{selectedItem.type === '' ? (<></>) : (<p>Type: {selectedItem.type}</p>)}</p>
                    </div>
                </div> 
            </div>
        )
    }
    
}