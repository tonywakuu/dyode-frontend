import React, { Component } from 'react';
import CookieConsent from "react-cookie-consent";
import * as cookies from 'js-cookie';

class CookieBanner extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {   
        return (
            <div>
                <CookieConsent
                    onAccept={() => {
                        cookies.set('guest', {})
                        alert("Your session is now running cookies");
                    }}
                    enableDeclineButton
                    onDecline={() => {
                        alert("nay!");
                    }}
                    location="bottom"
                    cookieName="cookie"
                    style={{ background: "rgba(52, 64, 81, 0.88)" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                    expires={150}
                >
                Muvor uses cookies to guarantee users the employment of its site features, offering a better purchasing experience. By continuing to browse the site you're agreeing to our use of cookies.<b><a href="www.wakuuenterprise.com/cookies"> More information on our use of cookies.</a></b>{" "}
                {//<span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
            }
            </CookieConsent>
            </div>
        );
    }
}

export default CookieBanner;