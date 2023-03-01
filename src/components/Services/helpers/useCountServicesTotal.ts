import { useEffect } from 'react';
import { useState } from 'react';

import { ServicesMockData } from 'src/mockData/ServicesMockData';

export const useCountServicesTotal = (services: ServicesMockData[]) => {
  const [summ, setSumm] = useState(0);

  const updateSumm = () => {
    const calculated = services.reduce((accum, currentValue) => {
      return accum + currentValue.amount;
    }, 0);

    setSumm(calculated);
  };

  useEffect(updateSumm, [services]);

  return summ;
};
