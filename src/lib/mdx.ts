import fs from 'fs';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import slugify from 'slugify';
import { PostMatter } from '@/types/post';

const BASE_PATH = '/src/posts';

export const generateSlug = (title: string, slug?: string): string => {
  return slugify(slug || title, {
    lower: true,
    strict: true,
    locale: 'ko',
  });
};

export const parseMdx = async (postPath: string) => {
  const postDetail = await parseMdxDetail(postPath);
  const postAbstract = await parseMdxAbstract(postPath);

  return { ...postAbstract, ...postDetail };
};

// MDX Abstract
// url, cg path, cg name, slug
export const parseMdxAbstract = async (
  postPath: string
  // frontmatter: PostMatter
) => {
  // category1/titl1/content
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [category, slug] = filePath.split('/');

  // const slug = generateSlug(frontmatter.title, frontmatter.slug);
  const url = `/posts/${category}/${slug}`;

  return { url, category, slug };
};

// MDX Detail
// content, data
export const parseMdxDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const frontmatter = data as PostMatter;
  const dateToString = dayjs(frontmatter.date)
    .locale('ko')
    .format('YYYY/MM/DD');

  return { frontmatter, dateToString, content };
};
