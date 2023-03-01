import { ServicesMockData } from 'src/mockData/ServicesMockData';

export enum ServiceItemProgressBarColors {
  BIGGEST = '#B1E19B',
  COMMON = '#ACE2F8',
}
export type ServiceItemRenderType = ServicesMockData & {
  width: number;
  color: ServiceItemProgressBarColors;
};
