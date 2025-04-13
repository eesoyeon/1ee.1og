import { getPostDetail } from '@/lib/posts';

interface PostDetailPageProps {
  params: {
    slug: string[];
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
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
