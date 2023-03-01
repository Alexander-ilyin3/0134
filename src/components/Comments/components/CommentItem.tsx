import React from 'react';

import { Styled as S } from './CommentItemStyles';
import { CommentMockData } from 'src/mockData/CommentsMockData';

export const CommentItem: React.FC<CommentMockData> = ({ comment, date, name }) => {
  return (
    <S.Root>
      <S.CommentHeader>
        <S.Name>{name}</S.Name>
        <S.Date>{date}</S.Date>
      </S.CommentHeader>
      <S.Comment>
        <S.CommentPointer />
        {comment}
      </S.Comment>
    </S.Root>
  );
};
