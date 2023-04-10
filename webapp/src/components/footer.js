import * as React from 'react';

import { footerStyled } from './footer.style';

export default function Footer(props) {
    const { msg } = props;
    
    return(
        <p style={footerStyled}>{msg}</p>
    )
}