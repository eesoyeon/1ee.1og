interface CategoryListProps {
  category: string;
}

export async function CategoryList({ category }: CategoryListProps) {
  return (
    <button className="w-fit px-3 py-1 border border-gray-200 text-sm rounded-full hover:shadow-inner md:text-xs ">
      {category}
    </button>
  );
}
