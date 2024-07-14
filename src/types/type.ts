import { StaticImageData } from "next/image";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    currency: string;
    quantity: number;
}

export type Product = {
    id: string;
    name: string;
    price: number;
    currency: string;
    imageSrc: StaticImageData;
    imageAlt: string;
}