import * as React from 'react';
import { useRef } from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { buttonLeftStyled, buttonRightStyled, paginationContainer, paginationButtons, paginationCounter} from './pagination.style';

export default function Pagination(props) {
    const { setPage } = props
    const pageNumber = useRef(1);

    const nextPage = () => {
        if(pageNumber.current < 42) {
            let page = pageNumber.current += 1
            setPage(page);
        }
        
    }

    const beforePage = () => {
        if(pageNumber.current > 0) {
            let page = pageNumber.current -= 1;
            setPage(page);
        }
    }

    return(
        <>
            <div style={paginationContainer}> 
                <div style={paginationCounter}>
                    <p>Page {pageNumber.current} of 42</p>
                </div>
                <div style={paginationButtons}>
                    <button title="before page" style={buttonLeftStyled} onClick={() => beforePage()}>
                        <label><FontAwesomeIcon icon={faChevronLeft}>Anterior</FontAwesomeIcon></label>
                    </button>
                    <button title="next page" style={buttonRightStyled} onClick={() => nextPage()}>
                        <label><FontAwesomeIcon icon={faChevronRight}>Próximo</FontAwesomeIcon></label>
                    </button>
                </div>
            </div>
        </>
    )
} 