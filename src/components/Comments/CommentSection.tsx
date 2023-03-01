import React from 'react';

import { Styled as S } from './CommentSectionStyles';
import { CommentItem } from './components/CommentItem';
import { commentMockData } from 'src/mockData/CommentsMockData';

export const CommentSection: React.FC = () => {
  return (
    <S.Root>
      <S.HeaderWrapper>
        <h2>Latest reviews</h2>
        <a href="">All reviews</a>
      </S.HeaderWrapper>
      <S.CommentSectionContainter>
        {commentMockData.map((props, i) => {
          return <CommentItem key={i} {...props} />;
        })}
      </S.CommentSectionContainter>
    </S.Root>
  );
};
