import { http, HttpResponse } from 'msw';
import { GetUserResponse } from '../types/user';

const users: GetUserResponse[] = Array.from(Array(1024).keys()).map((id) => ({
  name: `name${id}`,
  email: `email${id}@naver.com`,
}));

export const handlers = [
  http.get('http://reactquerytest.com/userList', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const size = Number(url.searchParams.get('size')) || 20;

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const content = users.slice(startIndex, endIndex);

    const totalCount = users.length;
    const totalPages = Math.ceil(totalCount / size);

    return HttpResponse.json(
      {
        content,
        page,
        totalCount,
        isLastPage: page >= totalPages,
        isFirstPage: page === 1,
      },
      {
        status: 200,
      },
    );
  }),
];
