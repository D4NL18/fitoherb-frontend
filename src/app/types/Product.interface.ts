import { ProductCategory } from "./ProductCategory.interface";
import { Supplier } from "./Supplier.interface";

export interface Product {
    idProduct: string;
    productName: string;
    price_in_cents: number;
    productDescription: string;
    productImageUrl: string;
    supplier: Supplier;
    productCategory: ProductCategory;
}
