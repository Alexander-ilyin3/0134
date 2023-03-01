import React from 'react';

import { ServiceItemRenderType } from '../../models/ServiceItemRenderType';
import { ProgressBar, ProgressBarWrapper, Root } from './ServiceItemStyles';

type PropTypes = ServiceItemRenderType;

export const ServiceItem: React.FC<PropTypes> = ({ color, width, name, amount }) => {
  const reducedWidth = width - (width / 100) * 20;

  return (
    <Root>
      <ProgressBarWrapper>
        <ProgressBar color={color} width={reducedWidth}>
          <span>{name}</span>
        </ProgressBar>
      </ProgressBarWrapper>
      <span>{amount}</span>
    </Root>
  );
};
