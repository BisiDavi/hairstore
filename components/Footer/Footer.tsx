import React from "react";
import { MailForm } from "..";

const Footer = () => {
    return (
        <div className="footer-section">
            <MailForm />
            <div className="footer">
                <p>2021 JenJensLuxuryhair.</p>
            </div>
            <style jsx>
                {`
                    .footer {
                        background-color: rgb(189, 90, 188);
                        color: white;
                        text-align: center;
                        font-family: "raleway";
                        font-size: 1em;
                    }
                `}
            </style>
        </div>
    );
};

export default Footer;
