import React, { Component } from "react";

import FooterSignup from "./components/footerSignup";
import FooterLinks from "./components/footerLinks";
import FooterBottom from "./components/footerBottom";

class App extends Component {

    render () {
        return (
            <div>
                <FooterSignup/>
                <FooterLinks/>
                <FooterBottom/>
            </div>

        )
    }
}
export default App;


