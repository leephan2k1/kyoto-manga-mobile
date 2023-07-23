import { ComicPreview } from '~/models/Comic';
import { Genre } from '~/models/Genre';

export interface IScraper {
  getSuggestions: () => Promise<ComicPreview[]>;

  getPopulations: () => Promise<ComicPreview[]>;

  getGenres: () => Promise<Genre[]>;
}
