// 仮のデータ
const products = [
  {
    id: "1",
    title: "Basic Tee",
    imageUrl:
      "https://kzmk13cv4m9dhgij3kop.lite.vusercontent.net/placeholder.svg?height=600&width=600",
    description: "A comfortable and versatile tee for everyday wear.",
    price: 19.99,
  },
  {
    id: "2",
    title: "Leather Bag",
    imageUrl:
      "https://kzmk13cv4m9dhgij3kop.lite.vusercontent.net/placeholder.svg?height=600&width=600",
    description: "A stylish leather bag perfect for work or casual outings.",
    price: 89.99,
  },
  // 他の商品も同様に追加
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* 商品画像 */}
          <div className="aspect-w-1 aspect-h-1 w-full">
            <img
              src={product.imageUrl}
              alt={product.title}
              width={600}
              height={600}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </div>

          {/* 商品情報 */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.title}
            </h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>
            <div className="mt-10">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
