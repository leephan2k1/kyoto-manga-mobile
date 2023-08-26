import { ComicPreview } from '~/models/Comic';
import { Genre } from '~/models/Genre';
import { Selection } from '~/common/interfaces/selection';
import { ComicListResponse } from '~/common/interfaces/comicListResponse';
import { ISearchParams } from '~/common/interfaces/ISearchParams';

export interface IScraper {
  status: Selection[];
  sort: Selection[];

  getSuggestions: () => Promise<ComicPreview[]>;

  getPopulations: () => Promise<ComicPreview[]>;

  getGenres: () => Promise<Genre[]>;

  searchComic: (params: ISearchParams) => Promise<ComicListResponse>;
}
