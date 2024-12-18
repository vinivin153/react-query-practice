export interface User {
  id: string;
  name: string;
  email: string;
}

export interface GetUserResponse {
  name: string;
  email: string;
}

export interface GetUserListResponse {
  content: GetUserResponse[];
  page: number;
  size: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}

export interface ServerResponse {
  data: GetUserListResponse;
  page: number;
  isLastPage: boolean;
}
