import { parseMdxAbstract } from '@/lib/mdx';
import { getPostDetail, getPostPaths } from '@/lib/posts';

export async function generateStaticParams() {
  const paths = getPostPaths();

  const mdxAbstract = await Promise.all(
    paths.map((path) => parseMdxAbstract(path))
  );

  return mdxAbstract.map(({ category, slug }) => ({ slug: [category, slug] }));
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const [category, slug] = (await params).slug;
  const postDetail = await getPostDetail(category, slug);

  return (
    <>
      <h1>{postDetail.frontmatter.title}</h1>
      <main>{postDetail.content}</main>
    </>
  );
}
