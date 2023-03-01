import styled from 'styled-components';

import { ReactComponent as TriangleIcon } from 'src/assets/icons/Chat_Triangle.svg';

export const Styled = () => null;
Styled.Root = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

Styled.CommentHeader = styled('div')`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

Styled.Name = styled('span')`
  font-weight: bold;
  font-size: 14px;
  color: #333333;
`;

Styled.Date = styled('span')`
  font-size: 11px;
  color: #808080;
`;

Styled.Comment = styled('div')`
  padding: 12px 20px;
  background-color: #f2fbff;
  border: 1px solid #c4cbcf;

  font-size: 14px;

  position: relative;
`;

Styled.CommentPointer = styled(TriangleIcon)`
  position: absolute;
  top: -32px;
  left: 32px;
  margin-top: 20px;
`;
