import React from "react";
import Image from "next/image";
import { Button } from "..";

const SelfiesBanner = ({ imgsrc }) => {
    return (
        <div className="selfies">
            <div className="selfie-content">
                <div className="send-selfies">
                    <Image
                        src={imgsrc}
                        height={300}
                        width={600}
                        layout="responsive"
                    />
                </div>
                <div className="instagram-follow">
                    <h3>Send Us Your Selfies!</h3>
                    <p>
                        Follow our Instagram and send us your gorgeous selfies
                        or tag us!
                    </p>
                </div>
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
