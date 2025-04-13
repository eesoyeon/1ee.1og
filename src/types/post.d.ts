export type PostMatter = {
  title: string;
  date: string;
  slug?: string;
  tags?: string[];
  desc?: string;
  thumbnail?: string;
};

export type Post = {
  frontmatter: PostMatter;
  dateToString: string;
  content: string;
  category: string;
  slug: string;
  url: string;
};
