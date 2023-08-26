import { ComicPreview } from '~/models/Comic';

export interface ComicListResponse {
  comics: ComicPreview[];
  hasNextPage: boolean;
  currentPage: number;
}
