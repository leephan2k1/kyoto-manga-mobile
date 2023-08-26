import { Source } from '~/common/types/source';

export function getFeaturedSortValue(source: Source) {
  if (source === 'TruyenTranhLH') return 'like';
  if (source === 'Nettruyen') return '19';
}
