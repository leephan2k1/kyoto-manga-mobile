import { useQuery } from '@tanstack/react-query';
import { TruyenTranhLHInstance } from '~/extensions/vi/TruyenTranhLH/instance';

export function getGenresService() {
  return useQuery({
    queryKey: ['getGenres'],
    queryFn: async () => {
      return await TruyenTranhLHInstance.getGenres();
    },
  });
}
