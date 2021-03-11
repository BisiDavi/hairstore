import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { CartIcon } from "../.";
import { Hamburger } from "../Button";

const Nav = () => {
    const [btnState, setBtnstate] = useState(false);
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
        <>
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
            <style jsx>
                {`
                    ul.menu li.menu-link ul {
                        display: none;
                    }

                    ul.menu li.menu-link {
                        height: 25px;
                        color: #ce897b;
                    }

                    ul.menu {
                        display: flex;
                        width: 70%;
                        align-items: center;
                        justify-content: space-around;
                    }
                    @media (max-width: 768px) {
                        ul.menu {
                            display: none;
                        }
                    }
                `}
            </style>
        </>
    );
    const btnClassName = btnState ? "menu opened" : "menu";
    const hamburgerHandler = () => setBtnstate(!btnState);

    return (
        <nav className="nav-menu">
            <span className="image">
                <Image
                    src="/logo.jpg"
                    height={150}
                    width={150}
                    layout="responsive"
                />
            </span>
            {showMenu(menuLink)}
            <span className="cart">
                <CartIcon count={0} />
            </span>
            <span className="hamburger">
                <Hamburger
                    btnClick={hamburgerHandler}
                    className={btnClassName}
                />
            </span>
            <style jsx>
                {`
                    .image {
                        height: 5%;
                        width: 30%;
                        margin: auto;
                    }
                    nav.nav-menu {
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        width: 100%;
                    }
                    @media (max-width: 768px) {
                        .cart {
                            position: absolute;
                            left: 20px;
                            height: 30px;
                        }
                        .hamburger {
                            height: 50px;
                            width: 50px;
                            position: absolute;
                            right: 10px;
                        }
                        nav.nav-menu {
                            padding: 0px 22px;
                        }
                    }
                    @media (min-width: 800px) {
                        .hamburger {
                            display: none;
                        }
                    }
                `}
            </style>
        </nav>
    );
};

export default Nav;
