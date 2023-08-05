import { ComicPreview } from '~/models/Comic';
import { parse } from 'node-html-parser';
import { Genre } from '~/models/Genre';

export async function parseSuggestions(data: any): Promise<ComicPreview[]> {
  const document = parse(data);

  const slides = document.querySelectorAll(
    '#ctl00_divCenter > div > div > div.items > div.row > div',
  );

  return slides.map((slide) => {
    const title = slide.querySelector('.jtip')?.textContent.trim();

    const updatedTime = slide
      .querySelector('figure > figcaption > ul > li:nth-child(1) > i')
      ?.textContent.trim();

    const thumbnail = slide
      .querySelector('.image img')
      ?.getAttribute('data-original');

    const latestChapter = slide
      .querySelector('figure > figcaption > ul > li:nth-child(1) > a')
      ?.textContent.trim();

    const url = slide.querySelector('.jtip')?.getAttribute('href');
    const path = url?.slice(url?.lastIndexOf('/') + 1, url?.length);

    return {
      title: title || '',
      updatedTime: updatedTime || '',
      thumbnail: thumbnail || '',
      latestChapter: latestChapter || '',
      path: path || '',
    };
  });
}

export async function parseGenre(data: any): Promise<Genre[]> {
  const document = parse(data);

  const list = document.querySelectorAll(
    '#ctl00_divRight > div > div > ul > li',
  );

  return list.map((item) => {
    const title = item.querySelector('a')?.textContent.trim();
    const url = item.querySelector('a')?.getAttribute('href');

    return {
      title: title || '',
      url: url || '',
    };
  });
}

export async function parsePopulation(data: any): Promise<ComicPreview[]> {
  const document = parse(data);

  const slides = document.querySelectorAll(
    '#ctl00_divCenter > div.Module.Module-170 > div > div.items > div > div',
  );

  return slides.map((slide) => {
    const title = slide.querySelector('.jtip')?.textContent.trim();

    const url = slide.querySelector('.jtip')?.getAttribute('href');
    const path = url?.slice(url?.lastIndexOf('/') + 1, url?.length);

    const latestChapter = slide
      .querySelector('figure > figcaption > ul > li:nth-child(1) > a')
      ?.textContent.trim();
    const thumbnail = slide
      .querySelector('.image img')
      ?.getAttribute('data-original');
    const updatedTime = slide
      .querySelector('figure > figcaption > ul > li:nth-child(1) > i')
      ?.textContent.trim();

    return {
      title: title || '',
      path: path || '',
      latestChapter: latestChapter || '',
      thumbnail: thumbnail || '',
      updatedTime: updatedTime || '',
    };
  });
}
