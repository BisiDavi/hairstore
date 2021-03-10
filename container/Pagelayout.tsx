import React from "react";
import Head from "next/head";
import { PagecontainerProps } from "../types";

const Pagelayout = ({ title, children }: PagecontainerProps): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Jenjen's Luxury hair & beauty | {title}</title>
            </Head>
            {children}
        </div>
    );
};

export default Pagelayout;
