import { getPostDetail } from '@/lib/posts';

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [category, slug] = params.slug;
  const postDetail = await getPostDetail(category, slug);
  console.log(params);

  return (
    <>
      <h1>{postDetail.frontmatter.title}</h1>
      <main>{postDetail.content}</main>
    </>
  );
}
