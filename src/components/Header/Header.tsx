import React from 'react';

import { Avatar, NamePosition, Root, PersonDescription, DescriptionBlock } from './HeaderStyles';

export const Header: React.FC = () => {
  return (
    <Root>
      <Avatar src="image/Avatar.png" />
      <PersonDescription>
        <NamePosition>
          <span>Eva Jonson</span>
          <span>Sales Manager</span>
        </NamePosition>
        <DescriptionBlock>
          I will find the best offers for you. <br />
          My services are absolutely free.
        </DescriptionBlock>
      </PersonDescription>
    </Root>
  );
};
