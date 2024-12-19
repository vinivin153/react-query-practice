import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { queries } from '../queries';
import { ServerResponse } from '../types/user';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

const InfiniteScrollWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  height: 150px;
  width: 200px;
  justify-self: center;
`;

export const InfiniteScroll = () => {
  const { data, fetchNextPage } = useInfiniteQuery({
    ...queries.users.infinite(),
    initialPageParam: 1,
    getNextPageParam: (lastPage: ServerResponse) => (lastPage.data.isLastPage ? null : lastPage.data.page + 1),
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (data) {
    return (
      <InfiniteScrollWrapper>
        <CardWrapper>
          {data.pages.map((group, idx) => (
            <React.Fragment key={group.data.content[idx].name}>
              {group.data.content.map((item) => (
                <Card>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </Card>
              ))}
            </React.Fragment>
          ))}
          <div ref={ref}>floor</div>
        </CardWrapper>
      </InfiniteScrollWrapper>
    );
  }
};
