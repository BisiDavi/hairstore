import React from "react";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h5>Subscribe to our newsletter</h5>
            <p>Promotions, new products and sales.Directly to your inbox.</p>
            <form>
                <input placeholder="Email Address" />
                <button type="submit">Subscribe</button>
            </form>
            <style jsx>{`
                .newsletter {
                    margin: 40px auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-family: Karla, sans-serif;
                    font-weight: 700;
                    font-style: normal;
                    text-rendering: optimizeLegibility;
                    letter-spacing: 0.05em;
                    font-size: 15px;
                }

                .newsletter h5 {
                    color: #ffa6ca;
                    font-size: 1.4em;
                }

                p {
                    font-weight: 500;
                    font-family: "Open-sans", sans-serif;
                }

                .newsletter input {
                    border: none;
                    background-color: #f4f4f4;
                    padding: 15px 10px;
                    width: 270px;
                }
                .newsletter button {
                    border: none;
                    background-color: black;
                    color: white;
                    padding: 15px 10px;
                }
                .newsletter button:hover {
                    background-color: #5d5353;
                    opacity: 1;
                    color: #ffa6ca;
                }
            `}</style>
        </div>
    );
};

export default Newsletter;
