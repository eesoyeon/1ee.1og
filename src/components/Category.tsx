interface CategoryProps {
  category: string;
}

export async function Category({ category }: CategoryProps) {
  return (
    <button className="w-fit px-2 py-1 text-black/60 text-sm rounded-xl hover:bg-gray-300/50 md:text-xs bg-gray-200/0 overflow-y-aut dark:text-white/70 ">
      {category}(8)
    </button>
  );
}
