import React from "react";
import Head from "next/head";
import { Pagelayout } from "../container";
import { Nav, AlertBanner } from "../components";

const Home = () => {
    return (
        <Pagelayout title="Welcome">
            <div className="homepage">
                <AlertBanner />
                <Nav />
            </div>
        </Pagelayout>
    );
};

export default Home;
