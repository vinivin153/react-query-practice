import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { users } from './users';
import { product } from './product';

export const queries = mergeQueryKeys(users, product);
