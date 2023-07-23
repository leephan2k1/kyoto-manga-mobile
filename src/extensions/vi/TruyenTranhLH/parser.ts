import { parse } from 'node-html-parser';
import { ComicPreview } from '~/models/Comic';
import { Genre } from '~/models/Genre';

export async function parseSuggestions(data: any): Promise<ComicPreview[]> {
  const document = parse(data);

  const slides = document.querySelectorAll(
    '#app > main > div.container > div.card.card-dark > div.card-body.bg-dark > div > div.owl-stage-outer > div > div',
  );

  //@ts-ignore
  return slides.map((slide) => {
    const matchesUrl = slide
      .querySelector('.content.img-in-ratio')
      ?.getAttribute('style')
      ?.match(/\((.*?)\)/);

    const title = slide
      .querySelector('.thumb_attr.series-title a')
      ?.textContent.trim();
    const latestChapter = slide
      .querySelector('.thumb_attr.chapter-title.text-truncate a')
      ?.textContent.trim();
    const updatedTime = slide.querySelector('time')?.textContent.trim();
    const url = slide
      .querySelector('.thumb_attr.series-title a')
      ?.getAttribute('href');

    return {
      url,
      updatedTime,
      latestChapter,
      title,
      thumbnail:
        matchesUrl && matchesUrl.length > 0
          ? matchesUrl[1].replace(/('|")/g, '')
          : 'thumbnail_error',
    };
  });
}

export async function parseGenre(data: any): Promise<Genre[]> {
  const document = parse(data);

  const list = document.querySelectorAll('div.card-body.bg-dark > ul > li');

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

  const list = document.querySelectorAll('.thumb-item-flow.col-6.col-md-3');

  return list.map((card) => {
    const title = card
      .querySelector('.thumb_attr.series-title a')
      ?.textContent.trim();
    const url = card
      .querySelector('.thumb_attr.series-title a')
      ?.getAttribute('href');
    const latestChapter = card
      .querySelector('.thumb_attr.chapter-title.text-truncate a')
      ?.textContent.trim();
    const thumbnail = card
      .querySelector('.content.img-in-ratio')
      ?.getAttribute('data-bg');
    const updatedTime = card
      .querySelector('.manga-badge .badge.badge-info time')
      ?.textContent.trim();

    return {
      title: title || '',
      url: url || '',
      latestChapter: latestChapter || '',
      thumbnail: thumbnail || '',
      updatedTime: updatedTime || '',
    };
  });
}
