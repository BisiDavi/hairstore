import React from "react";
import Link from "next/link";
import uuidv4 from "uuid";

const Menu = () => {
    const menuLink = [
        { name: "Home", link: "/" },
        { name: "SHOP", link: "/shop" },
        { name: "CONTACT", link: "/contact" },
    ];
    return (
        <ul>
            {menuLink.map((menu) => (
                <Link href={menu.link} passHref>
                    <li key={uuidv4}>{menu.name}</li>
                </Link>
            ))}
        </ul>
    );
};

export default Menu;
