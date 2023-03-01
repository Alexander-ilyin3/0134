import styled from 'styled-components';

export const Styled = () => null;

Styled.Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 24px 16px;

  background-color: #f2f2f2;
`;

Styled.Input = styled('textarea')`
  min-height: 64px;
  padding: 8px;

  resize: vertical;

  border: 1px solid #000;
  border-radius: 4px;

  font-family: Arial;
`;

Styled.Button = styled('button')`
  width: 280px;
  height: 42px;
  margin: 0 auto;
  box-sizing: border-box;

  background-color: #fdd639;

  font-size: 16px;
  font-family: PT Sans;
  font-weight: bold;
  color: #333333;

  border-radius: 24px;
  border: unset;

  cursor: pointer;

  &:disabled {
    color: #aaaaaa;
  }
`;
