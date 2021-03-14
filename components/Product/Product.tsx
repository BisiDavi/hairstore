import React, { FC } from "react";
import Image from "next/image";
import { ProductProps } from "../../types";

const Product: FC<ProductProps> = ({ product }): JSX.Element => {
    return (
        <div className="productView">
            <div className="front-view">
                <Image
                    src={product.img}
                    alt={product.name}
                    height={300}
                    width={300}
                    layout="responsive"
                />
            </div>
            <div className="back-view">
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
            </div>
            <style jsx>{`
                .productView {
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                    width: 100%;
                }

                .front-view {
                    width: 100%;
                    display: flex;
                    margin: auto;
                    flex-direction: column;
                }
            `}</style>
        </div>
    );
};

export default Product;
