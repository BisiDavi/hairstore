export interface PagecontainerProps {
    children: any;
    title: string;
}

export interface ButtonProps {
    linkTo?: string;
    text: string;
    bgColor: string;
    width: string;
    height: string;
}

export interface HamburgerProps {
    className: string;
    btnClick: () => void;
}

export interface CollectionViewProps {
    collection: Record<"img" | "name" | "text", string>;
}

export interface IProduct {
    name: string;
    price: number;
    img: string;
}

export interface ProductProps {
    product: IProduct;
}
