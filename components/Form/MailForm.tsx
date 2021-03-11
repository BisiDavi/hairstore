import React from "react";
import Image from "next/image";

const MailForm = () => {
    return (
        <div className="mailform">
            <div className="overlay">
                <div className="mail">
                    <p>
                        Be the first to know about our sales, new arrivals &
                        more!
                    </p>
                    <Image
                        className="mailText"
                        src="/mailListText.webp"
                        width="600px"
                        height="60px"
                    />
                </div>
                <form>
                    <input placeholder="Enter your email here*" />
                    <button>Join</button>
                </form>
            </div>
            <style jsx>
                {`
                    .mail {
                        align-items: center;
                        justify-content: center;
                        width: 70%;
                        margin: 50px auto 0px auto;
                        display: flex;
                        flex-direction: column;
                    }
                    .mail p {
                        color: white;
                        font-size: 1.3em;
                        text-align: center;
                        font-weight: 1000;
                        margin: -10px 0px 25px 0px;
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
                        width: 100%;
                        padding: 0px 50px;
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
                    @media (max-width: 768px) {
                        input {
                            padding: unset;
                            width: 70%;
                            height: 50px;
                        }
                        button {
                            height: 50px;
                            font-size: 1em;
                        }
                        input::placeholder {
                            font-size: 1em;
                        }
                        .overlay {
                            width: 100%;
                            height: 100%;
                            background-color: rgba(0, 0, 0, 0.6);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default MailForm;
