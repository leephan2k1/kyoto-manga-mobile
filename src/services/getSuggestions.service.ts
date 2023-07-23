import { useQuery } from '@tanstack/react-query';
import { TruyenTranhLHInstance } from '~/extensions/vi/TruyenTranhLH/instance';

export function getSuggestions() {
  return useQuery({
    queryKey: ['getSuggestions'],
    queryFn: async () => {
      return await TruyenTranhLHInstance.getSuggestions();
    },
  });
}
