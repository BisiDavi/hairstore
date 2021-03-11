import React from "react";
import Image from "next/image";
import { Button } from "..";

const HomeBanner = () => {
    return (
        <div className="Homebanner">
            <div className="overlay">
                <h3>WELCOME TO JENJEN'S LUXURY WIG</h3>
                <div className="welcometext">
                    <Image
                        src="/shopArrivalText.webp"
                        height={60}
                        width={1000}
                    />
                </div>
                <span className="button">
                    <Button
                        text="SHOP NOW"
                        linkTo="#shop"
                        bgColor="linear-gradient(90deg, #a43c59 0%, #cb4a6e 49%, #a43c59 100%)"
                        width="250px"
                        height="50px"
                    />
                </span>
            </div>
            <style jsx>
                {`
                    .overlay {
                        background: rgba(0, 0, 0, 0.1);
                        width: 100%;
                        height: 500px;
                        justify-content: center;
                        padding: 120px 0px;
                    }
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
                    .button {
                        background-color: #b44262;
                        height: 35px;
                        width: 150px;
                        display: flex;
                        color: white;
                        text-align: center;
                        justify-content: center;
                        font-family: "raleway";
                        border: none;
                        margin: auto;
                    }
                `}
            </style>
        </div>
    );
};

export default HomeBanner;
