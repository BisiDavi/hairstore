import React, { FC } from "react";
import { IProduct } from "../../types";
import Product from "./Product";

const Products: FC = (): JSX.Element => {
    const ProductsArray: IProduct[] = [
        { name: "ARI", price: 545, img: "/product1_temp.jpg" },
        { name: "Vixen", price: 485, img: "/product2_temp.webp" },
        { name: "RIAH", price: 235, img: "/product3.jpg" },
        { name: "Kelsey", price: 390, img: "/product4.webp" },
        { name: "Briana", price: 260, img: "/product5.jpg" },
        { name: "Ashley", price: 420, img: "/product6.webp" },
        { name: "JAYDA", price: 390, img: "/product7.webp" },
        { name: "KIA", price: 280, img: "/product8.jpg" },
    ];
    return (
        <div className="products">
            {ProductsArray.map((product) => (
                <Product product={product} />
            ))}
            <style jsx>{`
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-gap: 20px;
                padding: 0px 30px;
            `}</style>
        </div>
    );
};

export default Products;
