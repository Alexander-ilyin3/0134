import { useState } from 'react';
import { useEffect } from 'react';

import { ServiceItemProgressBarColors, ServiceItemRenderType } from '../models/ServiceItemRenderType';
import { ServicesMockData } from 'src/mockData/ServicesMockData';

export const useMapColorsAndWidthData = (services: ServicesMockData[]) => {
  const [mappedArray, setMappedArray] = useState<ServiceItemRenderType[]>([]);

  useEffect(() => {
    if (!services.length) {
      setMappedArray([]);
    }

    const ordered = services.sort((prev, next) => {
      if (prev.amount > next.amount) {
        return -1;
      } else if (prev.amount < next.amount) {
        return 1;
      }
      return 0;
    });

    const biggestAmount = ordered.at(0)?.amount || 1;

    const mapped = ordered.map((service) => {
      return {
        ...service,
        width: Math.round((100 * service.amount) / biggestAmount),
        color:
          biggestAmount === service.amount ? ServiceItemProgressBarColors.BIGGEST : ServiceItemProgressBarColors.COMMON,
      };
    });

    setMappedArray(mapped);
  }, [services]);

  return mappedArray;
};
