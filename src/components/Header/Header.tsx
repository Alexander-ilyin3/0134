import React from 'react';

import { Styled as S } from './HeaderStyles';

export const Header: React.FC = () => {
  return (
    <S.Root>
      <S.Avatar src="image/Avatar.png" />
      <S.PersonDescription>
        <S.NamePosition>
          <span>Eva Jonson</span>
          <span>Sales Manager</span>
        </S.NamePosition>
        <S.DescriptionBlock>
          I will find the best offers for you. <br />
          My services are absolutely free.
        </S.DescriptionBlock>
      </S.PersonDescription>
    </S.Root>
  );
};
