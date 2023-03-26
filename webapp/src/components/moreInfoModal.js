import * as React from 'react';
import { useState } from 'react';

export default function MoreInfoModal(props) {
    const { selectedItem, setShowModal, showModal } = props;

    if(showModal) {
        return(
            <div>
                <h1>{selectedItem.name}</h1>
                <img alt={selectedItem.name} src={selectedItem.image} />
                <p>{selectedItem.status}</p>
                <p>{selectedItem.species}</p>
                <p>{selectedItem.type}</p>
                <button onClick={() => setShowModal(false)}>Close</button>
            </div>
        )
    }
    
}