import { Post } from '@/types/post';
import Image from 'next/image';
import thumbnail from '@/posts/nextjs/blog/thumbnail.png';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  console.log(post);
  return (
    <Link
      key={post.slug}
      href={post.url}
      className="flex flex-row w-full h-full py-8 px-2 gap-6 sm:items-center sm:flex-col  relative border border-black/0 bg-white sm:border-gray-900/70 hover:border-rose-900  hover:border overflow-hidden transition-all duration-200 ease-in-out dark:hover:border-white hover:bg-rose-900/5 dark:hover:bg-rose-50"
    >
      <header className="flex flex-1 flex-col mx-2 sm:my-4 items-start justify-between text-gray-900 gap-4 break-keep sm:text-center sm:items-center sm:justify-center">
        <div className="flex flex-col items-start gap-1 sm:items-center sm:justify-center">
          <h1 className="max-sm:text-lg text-base font-medium break-keep">
            {post.frontmatter.title}
          </h1>
          <p className="text-xs sm:flex-1 text-black font-light break-words line-clamp-2 sm:m-4">
            {post.frontmatter.desc}
          </p>
        </div>

        <div className="rounded-xl border border-gray-900/60 px-2 py-1 text-xs md:text-[10px] tracking-widest">
          # {post.category}
        </div>
      </header>

      <div className="m-auto w-[40%] sm:w-[60%] lg:w-[70%] rounded-2xl">
        <Image
          src={thumbnail}
          alt="thumbnail"
          priority={true}
          // width={200}
          // height={200}
          className="mx-auto object-cover aspect-[5/4] rounded-2xl"
        />
      </div>

      <footer className="absolute bottom-3 right-4 sm:static sm:flex-center sm:my-4">
        <time
          className="text-[10px] text-center text-gray-900 font-light"
          dateTime={post.dateToString}
        >
          {post.dateToString}
        </time>
      </footer>
    </Link>
  );
}
