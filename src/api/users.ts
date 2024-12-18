import { AxiosResponse } from 'axios';
import { GetUserResponse, User } from '../types/user';
import { unauthenticated } from './axiosInstance';

export const getUser = (userId: string) => unauthenticated.get<AxiosResponse<GetUserResponse>>(`/users/${userId}`);
export const createUser = (userData: User) => unauthenticated.post('/users', userData);
// Partial을 사용해서 기존의 타입 속성 전부를 optional로 변경
export const updateUser = (userId: string, userData: Partial<User>) =>
  unauthenticated.patch(`/users/${userId}`, userData);
export const deleteUser = (userId: string) => unauthenticated.delete(`/users/${userId}`);
export const getUserList = (pageParam: number) =>
  unauthenticated.get('/userList', {
    params: {
      page: pageParam,
      size: 20,
    },
  });
