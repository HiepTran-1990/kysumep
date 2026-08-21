import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baiViet = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bai-viet' }),
  schema: z.object({
    tieu_de: z.string().max(70),
    mo_ta: z.string().max(200),
    danh_muc: z.string(),
    the: z.array(z.string()).default([]),
    ngay_dang: z.coerce.date(),
    ngay_cap_nhat: z.coerce.date().optional(),
    anh_bia: z.string().optional(),
    tac_gia: z.string().default('Trần Đại Hiệp'),
    noi_bat: z.boolean().default(false),
    tai_lieu: z.array(z.string()).default([]),
  }),
});

const taiLieu = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tai-lieu' }),
  schema: z.object({
    ten: z.string(),
    mo_ta: z.string(),
    danh_muc: z.string(),
    dinh_dang: z.string(),
    dung_luong: z.string(),
    phien_ban: z.string().default('v1.0'),
    ngay_cap_nhat: z.coerce.date(),
    phan_mem_can: z.string().optional(),
    tieu_chuan: z.array(z.string()).default([]),
    link_tai: z.string(),
    giay_phep: z.string().default('CC BY-NC 4.0'),
    bai_viet_lien_quan: z.string().optional(),
  }),
});

export const collections = { 'bai-viet': baiViet, 'tai-lieu': taiLieu };
