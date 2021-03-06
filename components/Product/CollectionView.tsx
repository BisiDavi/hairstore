import React from "react";
import Image from "next/image";
import styles from "./collection.module.css";
import { CollectionViewProps } from "../../types";

const CollectionView = ({ collection }: CollectionViewProps): JSX.Element => {
    return (
        <div className="collectionView">
            <span>
                <Image
                    src={collection.img}
                    alt={collection.name}
                    height={400}
                    width={400}
                    className={styles.collectionImg}
                    layout="responsive"
                />
                <div className={styles.backside}>
                    <h4>{collection.text}</h4>
                </div>
            </span>
            <div className="title">
                <h4>{collection.name}</h4>
                <i className="fas fa-long-arrow-alt-right"></i>
            </div>
            <style jsx>{`
                .collectionView {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }
                .title h4 {
                    margin-right: 15px;
                }
                .title {
                    display: flex;
                    align-items: center;
                    font-family: Karla, sans-serif;
                    font-weight: 700;
                    font-style: normal;
                    text-rendering: optimizeLegibility;
                    letter-spacing: 0.05em;
                    color: #ffa6ca;
                    font-size: 1.33333em;
                    margin: 20px 0px;
                }
            `}</style>
        </div>
    );
};

export default CollectionView;
