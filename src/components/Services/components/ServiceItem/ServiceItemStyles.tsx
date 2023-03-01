import styled from 'styled-components';

import { ServiceItemProgressBarColors } from '../../models/ServiceItemRenderType';

type StyledRootProps = { width: number; color: ServiceItemProgressBarColors };

export const Root = styled('div')`
  display: flex;
  justify-content: space-between;

  & > span {
    flex-basis: 60px;
    flex-shrink: 0;
    text-align: center;
    /* vertical-align: middle; */
    align-self: center;
  }
`;

export const ProgressBarWrapper = styled('div')`
  flex: 1;
`;

export const ProgressBar = styled('div')`
  width: ${(props: StyledRootProps) => props.width}%;
  height: 24px;
  background-color: ${(props: StyledRootProps) => props.color};

  display: flex;
  align-items: center;

  padding: 0 0 0 8px;
  border-left: 1px solid #33333333;
  border-radius: 0 3px 3px 0;
`;
