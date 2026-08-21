import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context) {
  const bai = (await getCollection('bai-viet')).sort(
    (a, b) => b.data.ngay_dang.valueOf() - a.data.ngay_dang.valueOf()
  );
  return rss({
    title: SITE.ten,
    description: SITE.moTa,
    site: context.site,
    customData: '<language>vi-VN</language>',
    items: bai.map((b) => ({
      title: b.data.tieu_de,
      description: b.data.mo_ta,
      pubDate: b.data.ngay_dang,
      link: '/' + b.id,
    })),
  });
}
