import Scraper from '~/libs/Scraper';
import { AxiosRequestConfig } from 'axios';
import {
  parseGenre,
  parsePopulation,
  parseSuggestions,
} from '~/extensions/vi/TruyenTranhLH/parser';
import { IScraper } from '~/libs/IScraper';

class TruyenTranhLH extends Scraper implements IScraper {
  private static instance: TruyenTranhLH;
  private constructor(
    baseUrl: string,
    axiosConfig?: AxiosRequestConfig,
    timeout?: number,
  ) {
    super(baseUrl, axiosConfig, timeout);
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
