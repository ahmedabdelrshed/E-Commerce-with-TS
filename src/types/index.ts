export interface ICategory {
    id?: number;
    title: string;
    img: string;
    prefix: string;
}
export type TLoading = 'pending' | 'idle' | 'succeeded' | 'failed';

export interface IProduct {
    id?: number;
    title: string;
    price: string;
    img: string;
    cat_prefix: string;
    quantity?: number;
}