import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import liverpoollogo from '../../Resources/images/logo/liverpool.png';

export const LiverpoolLogo = (props) => {

    const template = 
        <div 
            className="img_cover"
            style={{
                width: props.width,
                height: props.height,
                background:`url(${liverpoollogo}) no-repeat`
            }}
        >
        </div>

    if (props.link) {
        return (
            <BrowserRouter>
                <Link to={props.linkTo} className="link_logo">
                    {template}
                </Link>
            </BrowserRouter>
        )
    } else {
        return template
    }
}