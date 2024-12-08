import { ProductCard } from "~/components/ProductCard";

// 仮のデータ
const products = [
  {
    id: "1",
    title: "Basic Tee",
    imageUrl:
      "https://kzmk13cv4m9dhgij3kop.lite.vusercontent.net/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    title: "Leather Bag",
    imageUrl:
      "https://kzmk13cv4m9dhgij3kop.lite.vusercontent.net//placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    title: "Sunglasses",
    imageUrl:
      "https://kzmk13cv4m9dhgij3kop.lite.vusercontent.net//placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    title: "Watch",
    imageUrl:
      "https://kzmk13cv4m9dhgij3kop.lite.vusercontent.net//placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    title: "Sneakers",
    imageUrl:
      "https://kzmk13cv4m9dhgij3kop.lite.vusercontent.net//placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    title: "Headphones",
    imageUrl:
      "https://kzmk13cv4m9dhgij3kop.lite.vusercontent.net//placeholder.svg?height=300&width=300",
  },
  // 必要に応じて商品を追加
];

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
