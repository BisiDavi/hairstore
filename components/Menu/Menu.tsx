import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { CartIcon } from "../.";

const Nav = () => {
    const menuLink = [
        { name: "HOME", link: "/" },
        {
            name: "SHOP",
            link: "/shop",
            sublink: [
                { name: "HAIR & WIGS", link: "/hair-and-wigs" },
                { name: "LASHES", link: "/lashes" },
                { name: "BEAUTY & ACCESSORIES", link: "/beauty-accessories" },
            ],
        },
        { name: "CONTACT", link: "/contact" },
    ];
    const showMenu = (menus) => (
        <ul className="menu">
            {menus.map((menu) => (
                <Link key={uuidv4()} href={menu.link} passHref>
                    <li className="menu-link">
                        {menu.name}
                        {menu.sublink && (
                            <ul className="dropdown">
                                {menu.sublink.map((subMenu) => (
                                    <Link
                                        key={uuidv4()}
                                        href={subMenu.link}
                                        passHref
                                    >
                                        <li>{subMenu.name}</li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </li>
                </Link>
            ))}
        </ul>
    );

    return (
        <nav className="nav-menu">
            {showMenu(menuLink)}
            <CartIcon count={0} />
        </nav>
    );
};

export default Nav;
