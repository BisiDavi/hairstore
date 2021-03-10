import React from "react";

const Banner = () => {
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
                        font-size: 1.2em;
                        text-transform: capitalize;
                    }
                `}
            </style>
        </div>
    );
};

export default Banner;
