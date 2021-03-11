import React from "react";
import Image from "next/image";
import { Button } from "..";

const SelfiesBanner = () => {
    return (
        <div className="selfies">
            <div className="selfie-content">
                <p>WE WANT TO SEE YOU!</p>
                <h1>TAG US IN YOUR SELFIES</h1>
                <Button text="@jenjenluxry" bgColor="white" />
            </div>
            <Image src="/selfiesBanner.webp" width="100%" height="100%" />
        </div>
    );
};

export default SelfiesBanner;
