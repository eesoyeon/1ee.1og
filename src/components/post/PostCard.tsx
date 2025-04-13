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
      className="w-full relative border border-black/10 rounded-md bg-white hover:border-black"
    >
      <header className="flex flex-col items-center text-black py-8 px-4 gap-1">
        {/* <div> */}
        <h1 className="text-xl font-medium border-t border-rose-900/0 p-2 md:text-sm">
          {post.frontmatter.title}
        </h1>
        <p className="text-sm font-light md:text-xs">{post.frontmatter.desc}</p>
        {/* </div> */}
      </header>

      {/* <div className="text-xs">{post.dateToString}</div> */}

      <div className="mx-auto p-4 w-2/3 rounded-xs bg-black/10">
        <Image
          src={thumbnail}
          alt="thumbnail"
          // width={200}
          // height={200}
          className="mx-auto object-cover w-2/3"
        />
      </div>

      <footer className="tracking-widest flex-center py-8">
        <div className="bg-yellow-50 px-2 text-black text-xs md:text-[10px]">
          # {post.category}
        </div>
      </footer>
    </Link>
  );
}
