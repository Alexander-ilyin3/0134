import React from 'react';

import { Styled as S } from './ServicesStyles';
import { ServiceItem } from './components/ServiceItem/ServiceItem';
import { useCountServicesTotal } from './helpers/useCountServicesTotal';
import { useMapColorsAndWidthData } from './helpers/useMapColorsAndWidthData';
import { ServicesMockData } from 'src/mockData/ServicesMockData';

export const Services: React.FC = () => {
  const mappedWithColorsAndWidthData = useMapColorsAndWidthData(ServicesMockData);
  const total = useCountServicesTotal(ServicesMockData);
  return (
    <S.Root>
      <S.ServiceItemContainerWrapper>
        <span>Services</span>
        <S.ServiceItemContainer>
          {mappedWithColorsAndWidthData.map((props, i) => {
            return <ServiceItem key={i} {...props}></ServiceItem>;
          })}
        </S.ServiceItemContainer>
        <S.TotalBar>
          <span>Total</span>
          <span>{total}</span>
        </S.TotalBar>
      </S.ServiceItemContainerWrapper>
    </S.Root>
  );
};
