import React from 'react';
import { LiverpoolLogo } from '../ui/icons';

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <LiverpoolLogo 
                    height="70px"
                    width="70px"
                    link={true}
                    linkTo="/"             
                >
                </LiverpoolLogo>
            </div>
            <div className="footer_discl">
                Liverpool 2019. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;