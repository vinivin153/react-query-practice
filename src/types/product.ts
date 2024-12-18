export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface GetProductListResponse {
  products: Product[];
}

export interface CreateProductPayload {
  name: string;
  description: string;
  price: number;
  stock: number;
}
