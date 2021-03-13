import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const Footer = () => {
    const footerLinks = [
        { name: "Search", link: "#link" },
        { name: "Privacy Policy", link: "#link" },
        { name: "Refund Policy", link: "#link" },
        { name: "Shipping Policy", link: "#link" },
        { name: "Terms of Service", link: "#link" },
    ];

    const socialLinks = [
        { icon: "fab fa-instagram", link: "#link" },
        { icon: "fab fa-youtube", link: "#link" },
    ];

    return (
        <div className="footer-section">
            <ul className="footerLinks row">
                {footerLinks.map((link) => (
                    <Link href={link.link} passHref>
                        <li key={uuidv4()}>{link.name}</li>
                    </Link>
                ))}
            </ul>
            <div className="footer row">
                <ul className="social-links">
                    {socialLinks.map((link) => (
                        <Link href={link.link}>
                            <li key={uuidv4()}>{link.icon}</li>
                        </Link>
                    ))}
                </ul>
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
