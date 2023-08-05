import Scraper from '~/libs/Scraper';
import { AxiosRequestConfig } from 'axios';
import { IScraper } from '~/libs/IScraper';
import { parseCommon, parseGenre } from './parser';
import { Selection } from '~/common/interfaces/selection';

class Nettruyen extends Scraper implements IScraper {
  sort: Selection[] = [
    { label: 'Ngày cập nhật', value: '' },
    { label: 'Truyện mới', value: '15' },
    { label: 'Top All', value: '10' },
    { label: 'Top tháng', value: '11' },
    { label: 'Top tuần', value: '12' },
    { label: 'Top ngày', value: '13' },
    { label: 'Top theo dõi', value: '20' },
    { label: 'Số lượng chapter', value: '30' },
  ];
  status: Selection[] = [
    { label: 'Tất cả', value: '-1' },
    { label: 'Đang tiến hành', value: '1' },
    { label: 'Hoàn thành', value: '-2' },
  ];

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

  public async searchComic(keyword: string) {
    const { data } = await this.client.get(`${this.baseUrl}/tim-truyen`, {
      params: {
        keyword,
      },
    });

    return await parseCommon(data);
  }

  public async getSuggestions() {
    try {
      const { data } = await this.client.get(`${this.baseUrl}`);

      return await parseCommon(data);
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

      return await parseCommon(data);
    } catch (e) {
      console.log('getPopulations error: ', e);

      return [];
    }
  }
}

export const NettruyenInstance = Nettruyen.Instance('https://nettruyenco.vn');
