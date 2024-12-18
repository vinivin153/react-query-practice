import { AxiosResponse } from 'axios';
import { unauthenticated } from './axiosInstance';
import { CreateProductPayload, GetProductListResponse } from '../types/product';

export const getProductList = () => unauthenticated.get<AxiosResponse<GetProductListResponse>>('/product/list');
export const getProductDetail = (productId: string) => unauthenticated.get(`/product/detail/${productId}`);
export const createProduct = (productData: CreateProductPayload) => unauthenticated.post('/product', productData);
