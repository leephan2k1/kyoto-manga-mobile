import { useInfiniteQuery } from '@tanstack/react-query';
import { TruyenTranhLHInstance } from '~/extensions/vi/TruyenTranhLH/instance';
import { ISearchParams } from '~/common/interfaces/ISearchParams';

export function useSearchComic({
  keyword,
  sort,
  status,
  genre,
}: ISearchParams) {
  return useInfiniteQuery({
    queryKey: ['searchComic', keyword, sort],
    queryFn: async ({ pageParam = 1 }) => {
      return await TruyenTranhLHInstance.searchComic({
        keyword,
        sort,
        page: pageParam,
        status,
        genre,
      });
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.hasNextPage ? lastPage.currentPage + 1 : undefined;
    },
    enabled:
      keyword !== undefined ||
      sort !== undefined ||
      status !== undefined ||
      genre !== undefined,
  });
}
