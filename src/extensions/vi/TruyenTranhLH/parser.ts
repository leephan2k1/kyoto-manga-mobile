import { parse } from 'node-html-parser';
import { ComicPreview } from '~/models/Comic';
import { Genre } from '~/models/Genre';
import { ComicListResponse } from '~/common/interfaces/comicListResponse';

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
    const path = url?.slice(url?.lastIndexOf('/') + 1, url?.length);

    return {
      path: path || '',
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

  return list.map((item, index) => {
    const title = item.querySelector('a')?.textContent.trim();
    const url = item.querySelector('a')?.getAttribute('href');

    return {
      title: title || '',
      url: url || '',
      value: `${index + 1}`,
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
    const path = url?.slice(url?.lastIndexOf('/') + 1, url?.length);

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
      path: path || '',
      latestChapter: latestChapter || '',
      thumbnail: thumbnail || '',
      updatedTime: updatedTime || '',
    };
  });
}

export async function parseSearchComic(data: any): Promise<ComicListResponse> {
  const document = parse(data);

  const list = document.querySelectorAll('.thumb-item-flow.col-6.col-md-2');

  const comics = list.map((card) => {
    const title = card
      .querySelector('.thumb_attr.series-title a')
      ?.textContent.trim();
    const url = card
      .querySelector('.thumb_attr.series-title a')
      ?.getAttribute('href');
    const path = url?.slice(url?.lastIndexOf('/') + 1, url?.length);

    const updatedTimeDiff = card
      .querySelector('.thumb-wrapper .badge.badge-info time')
      ?.getAttribute('datetime');

    const updatedTime = updatedTimeDiff
      ? `${Math.ceil(
          (new Date().getTime() - new Date(updatedTimeDiff).getTime()) /
            (1000 * 3600 * 24),
        )} ngày`
      : '';

    const thumbnail = card
      .querySelector('.thumb-wrapper .content.img-in-ratio.lazyloaded')
      ?.getAttribute('data-bg');

    const latestChapter = card
      .querySelector('.thumb-wrapper > .thumb-detail a')
      ?.textContent.trim();

    return {
      title: title || '',
      path: path || '',
      updatedTime: updatedTime || '',
      thumbnail: thumbnail || '',
      latestChapter: latestChapter || '',
    };
  });

  const disabledButton = document.querySelector(
    '.paging_item.paging_prevnext.next.disabled',
  );
  const hasNextPageBtn = document.querySelector(
    '.paging_item.paging_prevnext.next',
  );
  const currentPageDoc = document
    .querySelector('.paging_item.page_num.current')
    ?.textContent.trim();
  const currentPage = currentPageDoc ? Number(currentPageDoc) : 1;

  let hasNextPage = false;
  // if have a disable button then meaning no more pages to next:
  if (disabledButton) {
    hasNextPage = !Boolean(disabledButton);
  } else if (hasNextPageBtn) {
    hasNextPage = true;
  }

  return {
    comics,
    currentPage,
    hasNextPage,
  };
}
