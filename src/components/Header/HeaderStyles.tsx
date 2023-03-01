import styled from 'styled-components';

export const Root = styled('div')`
  min-width: 360px;
  max-width: 720px;

  display: flex;
  gap: 16px;

  background-color: #ffffff;
`;

export const Avatar = styled('div')`
  width: 124px;
  height: 124px;

  border-radius: 50%;

  background-image: url(${(props: { src: string }) => props.src});
  background-position: center 35%;
  background-size: cover;

  z-index: 1;
`;

export const NamePosition = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > span {
    color: #333333;
    font-size: 16px;
    font-weight: bold;
  }
  & > span + span {
    color: #808080;
    font-size: 12px;
    font-weight: normal;
  }
`;

export const PersonDescription = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;

  padding-top: 16px;
`;

export const DescriptionBlock = styled('div')`
  color: #333333;
  font-size: 14px;
  background-color: #fffbc8;

  padding: 12px 12px 12px 0;

  border: 1px solid #dadada;
  border-radius: 0 5px 5px 0;
  border-left: unset;

  position: relative;

  box-sizing: border-box;
  margin: 0;

  &::before {
    content: '';
    width: 78px;
    height: 100%;

    background-color: #fffbc8;

    position: absolute;
    top: -1px;
    right: 100%;

    border: 1px solid #dadada;
    border-right: unset;
    border-radius: 5px 0 0 5px;
  }
`;
