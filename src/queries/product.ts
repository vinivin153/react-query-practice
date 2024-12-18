import { createQueryKeys } from '@lukemorales/query-key-factory';
import { api } from '../api';

export const product = createQueryKeys('product', {
  all: null,
  detail: (productId: string) => ({
    queryKey: [productId],
    queryFn: () => api.getProductDetail(productId),
  }),
  list: () => ({
    queryKey: ['productList'],
    queryFn: () => api.getProductList(),
  }),
});
