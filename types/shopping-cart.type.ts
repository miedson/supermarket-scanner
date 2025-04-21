import { ProductCartType } from "./product.type"

export type ShoppingCartType = {
    products: ProductCartType[];
    add: (product: ProductCartType) => void;
    remove: (product: ProductCartType) => void;
    quantity?: number;
    totalCart?: number;
}