import React from "react";

const PromoBanner = () => {
    return (
        <div className="promoBanner">
            <h4>
                Shop JenJen's Luxury Hair |Get virgin Hair at Affordable Price{" "}
            </h4>
            <style jsx>{`
                .promoBanner {
                    background-color: black;
                }
                h4 {
                    color: #ffa6ca;
                    font: 700 normal 1.2em/1.6 "Open Sans", sans-serif;
                }
            `}</style>
        </div>
    );
};

export default PromoBanner;
