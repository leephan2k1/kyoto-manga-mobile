import { useQuery } from '@tanstack/react-query';
import { TruyenTranhLHInstance } from '~/extensions/vi/TruyenTranhLH/instance';

export function searchComic(keyword: string) {
  return useQuery({
    queryKey: ['getSuggestions'],
    queryFn: async () => {
      return await TruyenTranhLHInstance.searchComic(keyword);
    },
  });
}
