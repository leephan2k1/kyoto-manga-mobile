import { ComicPreview } from '~/models/Comic';
import { parse } from 'node-html-parser';

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

    return {
      title: title || '',
      updatedTime: updatedTime || '',
      thumbnail: thumbnail || '',
      latestChapter: latestChapter || '',
      url: url || '',
    };
  });
}
