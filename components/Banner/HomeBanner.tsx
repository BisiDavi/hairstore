import React from "react";
import Image from "next/image";
import { Button } from "..";

const HomeBanner = () => {
    return (
        <div className="Homebanner">
            <h3>WELCOME TO JENJEN'S LUXURY WIG</h3>
            <div className="welcometext">
                <Image src="/shopArrivalText.webp" height={60} width={1000} />
            </div>
            <Button
                text="SHOP NOW"
                linkTo="#shop"
                bgColor="#b44262"
                width="150px"
                height="35px"
            />

            <style jsx>
                {`
                    h3 {
                        font-size: 50px;
                        color: white;
                        font-weight: 1000;
                        text-align: center;
                    }
                    .Homebanner {
                        background-image: url("./mainBg.webp");
                        height: 500px;
                        background-size: cover;
                        width: 100%;
                        height: 500px;
                        display: flex;
                        flex-direction: column;
                        margin: auto;
                        justify-content: center;
                        font-family: "raleway";
                        align-items: center;
                    }
                    .welcometext {
                        margin: 20px auto;
                        width: 1000px;
                    }
                `}
            </style>
        </div>
    );
};

export default HomeBanner;
