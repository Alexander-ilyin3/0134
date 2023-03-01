import styled from 'styled-components';

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HeaderWrapper = styled('div')`
  display: flex;
  gap: 8px;

  & > h2 {
    font-size: 16px;
    font-weight: bold;
    color: #333333;
  }

  & > a {
    color: #005da1;
    font-size: 14px;
  }
`;

const CommentSectionContainter = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Styled = () => null;
Styled.Root = Root;
Styled.HeaderWrapper = HeaderWrapper;
Styled.CommentSectionContainter = CommentSectionContainter;
