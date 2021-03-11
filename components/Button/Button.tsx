import React from "react";
import Link from "next/link";
import { ButtonProps } from "../../types";

const Button = ({ text, linkTo, bgColor, width, height }: ButtonProps) => {
    return (
        <div>
            <Link href={linkTo} passHref>
                <button>{text}</button>
            </Link>
            <style jsx>
                {`
                    background-color: ${bgColor};
                    height: ${height};
                    width: ${width};
                    color: white;
                    text-align: center;
                    font-family: "raleway";
                    border: none;
                `}
            </style>
        </div>
    );
};

export default Button;
