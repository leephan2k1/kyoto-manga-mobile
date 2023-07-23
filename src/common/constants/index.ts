import { ComicPreview } from '~/models/Comic';

export const TAB_BAR_MAPPING: { [key: string]: string } = {
  Home: 'Nhà',
  Bookmark: 'Theo dõi',
  Search: 'Tìm kiếm',
  Settings: 'Cài đặt',
};

export const mock_comic_preview: ComicPreview = {
  title: 'Test',
  latestChapter: 'chapter 10',
  thumbnail:
    'https://truyentranhlh.net/storage/images/raw/90cb6067-3308-4b3b-bdef-c0d50da95547.jpg',
  url: 'https://truyentranhlh.net',
  updatedTime: '10h',
};
