import React from "react";
import Image from "next/image";
import { Button } from "..";

const SelfiesBanner = () => {
    return (
        <div className="selfies">
            <div className="selfie-content">
                <p>WE WANT TO SEE YOU!</p>
                <h1>TAG US IN YOUR SELFIES</h1>
                <button>@jenjenluxry</button>
            </div>

            <style jsx>
                {`
                    .selfies {
                        background-image: url("./selfiesBanner.webp");
                        height: 300px;
                        width: 100%;
                        background-size: cover;
                    }
                `}
            </style>
        </div>
    );
};

export default SelfiesBanner;
