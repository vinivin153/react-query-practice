import { createQueryKeys } from '@lukemorales/query-key-factory';
import { api } from '../api';

export const users = createQueryKeys('users', {
  all: null,
  detail: (userId: string) => ({
    queryKey: [userId],
    queryFn: () => api.getUser(userId),
  }),
  infinite: () => ({
    queryKey: ['infiniteScroll'],
    queryFn: ({ pageParam }: { pageParam: number }) => api.getUserList(pageParam),
  }),
});
