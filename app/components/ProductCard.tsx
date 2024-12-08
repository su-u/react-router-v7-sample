import { Link } from "react-router";

interface ProductCardProps {
  id: string;
  title: string;
  imageUrl: string;
}

export function ProductCard({ id, title, imageUrl }: ProductCardProps) {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
    </Link>
  );
}
