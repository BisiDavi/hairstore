import React from "react";

const AlertBanner = () => {
    return (
        <div>
            <h3>
                DUE TO <b>COVID 19</b> PLEASE BE ADVISED THERE MAY BE DELAY IN
                SHIPMENT.
                <br />
                WE APOLOGISE FOR ANY INCONVENIENCE.
                <br />
                FOR FURTHER ASSISTANCE PLEASE CALL{" "}
            </h3>

            <style jsx>
                {`
                    h3 {
                        color: white;
                        font-size: 1em;
                        text-transform: capitalize;
                        background-color: #ca3862;
                        text-align: center;
                        width: 100%;
                        font-family: "raleway";
                    }
                    @media (max-width: 768px) {
                        h3 {
                            font-size: 0.8em;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default AlertBanner;
