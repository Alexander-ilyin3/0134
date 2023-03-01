import React from 'react';
import styled from 'styled-components';

import { CommentForm } from '../CommentForm/CommentForm';
import { CommentSection } from '../Comments/CommentSection';
import { Header } from '../Header/Header';
import { Services } from '../Services/Services';
import { useCommentsController } from './hooks/useCommentsController';

const MainWrapper = styled('div')`
  padding: 14px 18px;
`;

const Root = styled('div')`
  margin: 104px auto;
  min-width: 360px;
  max-width: 720px;
  background-color: #ffffff;
`;

export const Layout: React.FC = () => {
  const { comments, addComment } = useCommentsController();

  return (
    <Root>
      <MainWrapper>
        <Header />
        <Services />
        <CommentSection comments={comments} />
      </MainWrapper>
      <CommentForm addComment={addComment} />
    </Root>
  );
};
