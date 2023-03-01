import React from 'react';

import { Styled as S } from './CommentSectionStyles';
import { CommentItem } from './components/CommentItem';
import { CommentMockData } from 'src/mockData/CommentsMockData';

type PropTypes = { comments: CommentMockData[] };

export const CommentSection: React.FC<PropTypes> = ({ comments }) => {
  return (
    <S.Root>
      <S.HeaderWrapper>
        <h2>Latest reviews</h2>
        <a href="">All reviews</a>
      </S.HeaderWrapper>
      <S.CommentSectionContainter>
        {comments.map((props, i) => {
          return <CommentItem key={i} {...props} />;
        })}
      </S.CommentSectionContainter>
    </S.Root>
  );
};
