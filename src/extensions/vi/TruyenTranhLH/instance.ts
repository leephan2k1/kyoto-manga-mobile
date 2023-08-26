import Scraper from '~/libs/Scraper';
import { AxiosRequestConfig } from 'axios';
import {
  parseGenre,
  parsePopulation,
  parseSearchComic,
  parseSuggestions,
} from './parser';
import { IScraper } from '~/libs/IScraper';
import { Selection } from '~/common/interfaces/selection';
import { ISearchParams } from '~/common/interfaces/ISearchParams';

class TruyenTranhLH extends Scraper implements IScraper {
  sort: Selection[] = [
    { label: 'A-Z', value: 'az' },
    { label: 'Z-A', value: 'za' },
    { label: 'Mới cập nhật', value: 'update' },
    { label: 'Truyện mới', value: 'new' },
    { label: 'Xem nhiều', value: 'top' },
    { label: 'Được thích nhiều', value: 'like' },
  ];
  status: Selection[] = [
    { label: 'Tất cả', value: '' },
    { label: 'Đang tiến hành', value: '1' },
    { label: 'Tạm ngưng', value: '2' },
    { label: 'Hoàn thành', value: '3' },
  ];
  private static instance: TruyenTranhLH;
  private constructor(
    baseUrl: string,
    axiosConfig?: AxiosRequestConfig,
    timeout?: number,
  ) {
    super(baseUrl, axiosConfig, timeout);
  }

  public async searchComic({
    keyword,
    sort,
    page,
    status,
    genre,
  }: ISearchParams) {
    const { data } = await this.client.get(`${this.baseUrl}/tim-kiem`, {
      params: {
        q: keyword,
        page,
        sort,
        status,
        accept_genres: genre,
      },
    });

    return await parseSearchComic(data);
  }

  public async getSuggestions() {
    const { data } = await this.client.get(`${this.baseUrl}`);

    return await parseSuggestions(data);
  }

  public async getPopulations() {
    const { data } = await this.client.get(
      `${this.baseUrl}/the-loai/manga?sort=top`,
    );

    return await parsePopulation(data);
  }

  public async getGenres() {
    const { data } = await this.client.get(`${this.baseUrl}/the-loai/action`);

    return await parseGenre(data);
  }

  public static Instance(
    baseUrl: string,
    timeout?: number,
    axiosConfig?: AxiosRequestConfig,
  ) {
    if (!this.instance) {
      this.instance = new this(baseUrl, axiosConfig, timeout);
    }

    return this.instance;
  }
}

export const TruyenTranhLHInstance = TruyenTranhLH.Instance(
  'https://truyentranhlh.net',
);
