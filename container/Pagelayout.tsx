import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { PagecontainerProps } from "../types";

const Pagelayout: NextPage = ({ title, children }: PagecontainerProps) => {
    return (
        <div>
            <Head>
                <title>Jenjenluxury hair & beauty | {title}</title>
            </Head>
            {children}
        </div>
    );
};

export default Pagelayout;
