import React from 'react';

import { Root, ServiceItemContainer, TotalBar, ServiceItemContainerWrapper } from './ServicesStyles';
import { ServiceItem } from './components/ServiceItem/ServiceItem';
import { useCountServicesTotal } from './helpers/useCountServicesTotal';
import { useMapColorsAndWidthData } from './helpers/useMapColorsAndWidthData';
import { ServicesMockData } from 'src/mockData/ServicesMockData';

export const Services: React.FC = () => {
  const mappedWithColorsAndWidthData = useMapColorsAndWidthData(ServicesMockData);
  const total = useCountServicesTotal(ServicesMockData);
  return (
    <Root>
      <ServiceItemContainerWrapper>
        <span>Services</span>
        <ServiceItemContainer>
          {mappedWithColorsAndWidthData.map((props, i) => {
            return <ServiceItem key={i} {...props}></ServiceItem>;
          })}
        </ServiceItemContainer>
        <TotalBar>
          <span>Total</span>
          <span>{total}</span>
        </TotalBar>
      </ServiceItemContainerWrapper>
    </Root>
  );
};
