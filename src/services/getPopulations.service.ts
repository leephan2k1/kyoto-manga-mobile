import { useQuery } from '@tanstack/react-query';
import { NettruyenInstance } from '~/extensions/vi/Nettruyen/instance';

export function getPopulationsService() {
  return useQuery({
    queryKey: ['getPopulations'],
    queryFn: async () => {
      return await NettruyenInstance.getPopulations();
    },
  });
}
