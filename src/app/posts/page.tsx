import { CategoryList } from '@/components/CategoryList';
import { PostCard } from '@/components/post/PostCard';
import { getCategoryDetail, getPostList } from '@/lib/posts';

export default async function PostListPage() {
  const postList = await getPostList();
  const categoryList = await getCategoryDetail();

  return (
    <main className="flex flex-col justify-center md:flex-row gap-4 w-[90%] m-auto relative my-10">
      <div className="flex gap-2 px-2 md:flex-col">
        {categoryList.map((category, index) => (
          <CategoryList key={index} category={category} />
        ))}
      </div>

      <section className="column-center gap-4 md:grid md:grid-cols-2 md:w-[80%]">
        {postList.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </section>
    </main>
  );
}
