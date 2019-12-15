import React from 'react';
import {Form, Button} from 'react-bootstrap';

import rodeo from '../assets/rodeo.svg';

function FooterSignup(props) {
    return (
        <div  id="footer-signup-container">
            <div className="row" id="footer-signup-content">
                <div className="col-5 p-0">
                    <div id="signup-ad" className="">Get the latest deals and more.</div>
                </div>
                <div className="col-3">
                    <Form.Control
                        id="signup-email"
                        className="m-2"
                        placeholder="Enter email address"
                    />
                </div>
                <div className="col-2" id="signup-button-col">
                    <Button className="m-2" id="signup-button">Sign Up</Button>
                </div>

                <div className="col-2">

                    <div className="m-2" id="signup-app-ad">
                        <img src={rodeo}  id="signup-app-logo"/>
                        <span id="signup-primary">West Buy Rodeo</span><br/>
                        <span id="signup-secondary">Learn more</span>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default FooterSignup;