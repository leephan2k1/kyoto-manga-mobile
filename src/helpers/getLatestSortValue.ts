import { Source } from '~/common/types/source';

export function getLatestSortValue(source: Source) {
  if (source === 'TruyenTranhLH') {
    return 'update';
  }
  if (source === 'Nettruyen') {
    return undefined;
  }
}
