import React from "react";
import Image from "next/image";

const MailForm = () => {
    return (
        <div className="mailform">
            <div className="mail">
                <Image
                    className="mailText"
                    src="/mailListText.webp"
                    width="600px"
                    height="60px"
                />
                <p>
                    Be the first to know about our sales, new arrivals & more!
                </p>
            </div>
            <form>
                <input placeholder="Enter your email here*" />
                <button>Join</button>
            </form>
            <style jsx>
                {`
                    .mail {
                        width: max-content;
                        margin: 50px auto 0px auto;
                    }
                    .mail p {
                        color: white;
                        font-size: 1.3em;
                        text-align: center;
                        font-weight: 1000;
                    }
                    form {
                        margin: auto;
                        width: max-content;
                        height: max-content;
                        display: flex;
                        font-family: "raleway";
                    }
                    input {
                        background: transparent;
                        border: 2px solid white;
                        height: 50px;
                        width: 500px;
                        height: 70px;
                        text-align: center;
                    }
                    button {
                        width: 100px;
                        border: 2px solid white;
                        color: rgb(178, 46, 183);
                        font-weight: 1000;
                        height: 70px;
                        font-size: 1.5em;
                        background-color: white;
                    }
                    button:hover {
                        background-color: rgb(178, 46, 183);
                        color: white;
                        border: 2px solid rgb(178, 46, 183);
                    }
                    .mailform {
                        background-image: url("./floralBg.webp");
                        height: 300px;
                        background-size: cover;
                        display: flex;
                        flex-direction: column;
                    }
                    input::placeholder {
                        color: white;
                        font-weight: bold;
                        font-size: 1.5em;
                        font-family: "raleway";
                    }
                `}
            </style>
        </div>
    );
};

export default MailForm;
