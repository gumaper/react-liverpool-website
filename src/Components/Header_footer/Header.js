import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { BrowserRouter, Link } from 'react-router-dom';

import { LiverpoolLogo } from '../ui/icons';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#D63838',
                    boxShadow: 'none',
                    padding: '10px 0',
                    borderBottom: '2px solid #B8161F'
                }}
            >

                <Toolbar style={{display: 'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                            <LiverpoolLogo
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>
                    </div>

                    <BrowserRouter>
                        <Link to="/the_team">
                            <Button color="inherit">The team</Button>
                        </Link>
                    </BrowserRouter>

                    <BrowserRouter>
                        <Link to="/the_matches">
                            <Button color="inherit">Matches</Button>
                        </Link>
                    </BrowserRouter>
                </Toolbar>


            </AppBar>
        )
    }
}

export default Header;
