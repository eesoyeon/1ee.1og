import { parseMdx } from '@/lib/mdx';
import { sync } from 'glob';
import path from 'path';
import fs from 'fs';

const BASE_PATH = '/src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const paths = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);

  return paths;
};

export const getPostList = async (category?: string) => {
  const paths = getPostPaths(category);
  const posts = await Promise.all(paths.map((path) => parseMdx(path)));

  return posts;
};

export const getPostDetail = async (category: string, slug: string) => {
  const postPath = path.join(POSTS_PATH, category, slug, 'content.mdx');

  if (!fs.existsSync(postPath)) {
    throw new Error(`포스트 없어용: ${postPath}`);
  }

  const post = await parseMdx(postPath);

  return post;
};

export const getCategoryDetail = async () => {
  const categories = fs.readdirSync(POSTS_PATH).filter((name) => {
    const fullPath = path.join(POSTS_PATH, name);
    return fs.lstatSync(fullPath).isDirectory();
  });

  return categories;
};
