import React from 'react';

import { ServiceItemRenderType } from '../../models/ServiceItemRenderType';
import { Styled as S } from './ServiceItemStyles';

type PropTypes = ServiceItemRenderType;

export const ServiceItem: React.FC<PropTypes> = ({ color, width, name, amount }) => {
  const reducedWidth = width - (width / 100) * 20;

  return (
    <S.Root>
      <S.ProgressBarWrapper>
        <S.ProgressBar color={color} width={reducedWidth}>
          <span>{name}</span>
        </S.ProgressBar>
      </S.ProgressBarWrapper>
      <span>{amount}</span>
    </S.Root>
  );
};
