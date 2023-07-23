import Scraper from '~/libs/Scraper';
import { AxiosRequestConfig } from 'axios';
import { IScraper } from '~/libs/IScraper';
import { parseGenre, parsePopulation, parseSuggestions } from './parser';

class Nettruyen extends Scraper implements IScraper {
  private static instance: Nettruyen;

  private constructor(
    baseUrl: string,
    axiosConfig?: AxiosRequestConfig,
    timeout?: number,
  ) {
    super(baseUrl, axiosConfig, timeout);
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

  public async getSuggestions() {
    try {
      const { data } = await this.client.get(`${this.baseUrl}`);

      return await parseSuggestions(data);
    } catch (e) {
      console.log('getSuggestions error: ', e);

      return [];
    }
  }

  public async getGenres() {
    try {
      const { data } = await this.client.get(`${this.baseUrl}/tim-truyen`);

      return await parseGenre(data);
    } catch (e) {
      console.log('getGenres error: ', e);

      return [];
    }
  }

  public async getPopulations() {
    try {
      const { data } = await this.client.get(
        `${this.baseUrl}/tim-truyen?status=-1&sort=11`,
      );

      return await parsePopulation(data);
    } catch (e) {
      console.log('getPopulations error: ', e);

      return [];
    }
  }
}

export const NettruyenInstance = Nettruyen.Instance('https://nettruyenco.vn');
