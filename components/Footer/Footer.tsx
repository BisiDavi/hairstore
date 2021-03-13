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
            <div className="row">
                <ul className="social-links">
                    {socialLinks.map((link) => (
                        <Link href={link.link}>
                            <i key={uuidv4()} className={link.icon}></i>
                        </Link>
                    ))}
                </ul>
                <div className="copyright">
                    <i className="far fa-copyright"></i>
                    <p>2021, JenJensLuxuryhair.</p>
                </div>
            </div>
            <style jsx>
                {`
                    .footer-section {
                        background-color: #ffa6ca;
                        color: #5c5c5c;
                        padding: 40px 20px;
                    }
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
