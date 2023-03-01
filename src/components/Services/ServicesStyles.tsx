import styled from 'styled-components';

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  & > span {
    font-size: 13px;
    width: 60px;
    text-align: center;
  }
`;

export const ServiceItemContainerWrapper = styled('div')`
  width: 325px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

export const ServiceItemContainer = styled('div')`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2px;

  font-size: 13px;
  white-space: nowrap;

  border: 2px solid #dadada;
  border-width: 2px 0px;

  padding: 12px 0;
`;

export const TotalBar = styled('div')`
  width: 100%;

  font-size: 16px;
  font-weight: bold;

  display: flex;
  justify-content: space-between;

  & > span + span {
    width: 60px;
    text-align: center;
  }
`;
