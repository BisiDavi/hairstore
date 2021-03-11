import React from "react";
import { Button } from "..";

const HomeBanner = () => {
    return (
        <div className="Homebanner">
            <h3>WELCOME TO JENJEN'S LUXURY WIG</h3>
            <h1 className="arrivalNotice">SHOP OUR NEW ARRIVALS</h1>
            <Button
                text="SHOP NOW"
                linkTo="#shop"
                bgColor="#b44262"
                width="150px"
                height="35px"
            />
        </div>
    );
};

export default HomeBanner;
