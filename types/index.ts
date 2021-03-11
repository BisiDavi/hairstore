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
