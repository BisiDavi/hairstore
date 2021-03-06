import React from "react";
import Image from "next/image";

const SelfiesBanner = () => {
    return (
        <div className="selfies">
            <div className="selfie-content">
                <div className="send-selfies">
                    <Image
                        src="/selfies_temp.png"
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
                        height: 100%;
                        width: 100%;
                    }
                    h3 {
                        font-family: Karla, sans-serif;
                        font-weight: 700;
                        font-style: normal;
                        text-rendering: optimizeLegibility;
                        letter-spacing: 0.05em;
                        margin: 0 0 0.66667em;
                        line-height: 1.4;
                        color: #ffa6ca;
                    }
                    p {
                        margin: 0 0 20px;
                    }
                    .instagram-follow {
                        margin: auto 40px;
                        display: flex;
                        flex-direction: column;
                    }
                    .selfie-content {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        width: 100%;
                        margin: 40px 0px;
                    }
                `}
            </style>
        </div>
    );
};

export default SelfiesBanner;
