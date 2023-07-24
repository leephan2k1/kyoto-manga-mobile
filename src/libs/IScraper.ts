import { ComicPreview } from '~/models/Comic';
import { Genre } from '~/models/Genre';
import { Selection } from '~/common/interfaces/selection';

export interface IScraper {
  status: Selection[];
  sort: Selection[];

  getSuggestions: () => Promise<ComicPreview[]>;

  getPopulations: () => Promise<ComicPreview[]>;

  getGenres: () => Promise<Genre[]>;
}
