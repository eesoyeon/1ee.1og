import { Category } from '@/components/Category';
import { PostCard } from '@/components/post/PostCard';
import { getCategoryDetail, getPostList } from '@/lib/posts';

export default async function PostListPage() {
  const postList = await getPostList();
  const categoryList = await getCategoryDetail();

  return (
    <main className="flex flex-col max-w-4xl gap-4 py-4 m-auto px-2">
      <div className="h-16 md:h-14"></div>

      <aside className="flex flex-wrap justify-start items-center gap-1">
        {categoryList.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </aside>

      <hr className="text-gray-300 sm:hidden w-full" />

      <section className="flex-1 grid gap-2 mx-auto w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 ">
        {postList.map((post, index) => (
          <div key={index}>
            <PostCard key={index} post={post} />
            <hr className="text-gray-200 sm:hidden w-full" />
          </div>
        ))}
      </section>
    </main>
  );
}
