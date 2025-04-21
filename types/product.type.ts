export type ProductType = {
    id: number;
    description: string;
    price: number;
    brand: string;
}

export type ProductCartType = {
    quantity?: number;
} & ProductType