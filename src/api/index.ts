import * as UsersAPI from './users';
import * as ProductAPI from './product';

export const api = {
  ...UsersAPI,
  ...ProductAPI,
};
